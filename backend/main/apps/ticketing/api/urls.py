from django.urls import path
from .views import UploadEventData, CreateEvent, EventListView, EventDetailView, TicketDetailView


urlpatterns = [
    path('events/data/upload/', UploadEventData.as_view(), name='upload-event-data'),
    path('events/create/', CreateEvent.as_view(), name='create-event'),
    path('events/', EventListView.as_view(), name='get-event-list'),
    path('events/<int:event_id>/', EventDetailView.as_view(), name='event-detail'),
    path('events/<int:event_id>/tickets/', TicketDetailView.as_view(), name='ticket-detail'),
]
