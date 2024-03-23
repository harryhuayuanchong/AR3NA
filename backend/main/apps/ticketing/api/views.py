from django.views import View
from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from main.apps.ticketing.models import Event, TicketSBT, TicketBC
from main.apps.ticketing.serializers import UploadEventSerializer, CreateEventSerializer, EventSerializer


class UploadEventData(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UploadEventSerializer(data=request.data)
        if serializer.is_valid():
            event = serializer.save()
            return Response({"message": "Event data uploaded successfully.", "event_id": event.id}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CreateEvent(APIView):
    def post(self, request, *args, **kwargs):
        serializer = CreateEventSerializer(data=request.data)
        if serializer.is_valid():
            event_id = serializer.validated_data['event_id']
            contract_addresses = serializer.validated_data['contract_addresses']

            try:
                event = Event.objects.get(id=event_id)
                TicketSBT.objects.filter(
                    contract_address__in=contract_addresses).update(event=event)

                for contract_address in contract_addresses:
                    try:
                        ticket = TicketBC.objects.get(
                            contract_address=contract_address)
                        event.image = ticket.image
                        break
                    except TicketBC.DoesNotExist:
                        continue

                TicketBC.objects.filter(
                    contract_address__in=contract_addresses).update(event=event)
                event.is_created = True
                event.save()

                return Response({"message": "Event and tickets updated successfully."}, status=status.HTTP_200_OK)
            except Event.DoesNotExist:
                return Response({"error": "Event not found."}, status=status.HTTP_404_NOT_FOUND)
            except TicketBC.DoesNotExist:
                return Response({"error": "No TicketBC found for the provided contract addresses."}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
class EventListView(ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class EventDetailView(View):
    def get(self, request, *args, **kwargs):
        event_id = kwargs.get('event_id')
        try:
            event = Event.objects.get(id=event_id)
        except Event.DoesNotExist:
            return JsonResponse({'error': 'Event not found'}, status=404)

        event_data = {
            'name': event.name,
            'image': event.image,
            'genre': event.genre,
            'date': event.date,
            'time': event.time,
            'information': event.information,
            'location': event.location,
            'is_created': event.is_created,
        }

        return JsonResponse(event_data)

class TicketDetailView(View):
    def get(self, request, *args, **kwargs):
        event_id = kwargs.get('event_id')
        try:
            event = Event.objects.get(id=event_id)
            tickets_sbt = list(TicketSBT.objects.filter(event=event).order_by('ticket_id').values())
            tickets_bc = list(TicketBC.objects.filter(event=event).order_by('id').values())
        except Event.DoesNotExist:
            return JsonResponse({'error': 'Event not found'}, status=404)

        ticket_data = {
            'tickets_sbt': tickets_sbt,
            'tickets_bc': tickets_bc,
        }

        return JsonResponse(ticket_data)
