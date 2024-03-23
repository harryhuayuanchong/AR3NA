from rest_framework import serializers
from main.apps.ticketing.models import Event

class UploadEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['name', 'image', 'genre', 'date', 'time', 'information', 'location']

class CreateEventSerializer(serializers.Serializer):
    event_id = serializers.IntegerField()
    contract_addresses = serializers.ListField(child=serializers.CharField())

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'name', 'image', 'genre', 'date', 'time', 'information', 'location', 'is_created']
