from django.db import models

class Event(models.Model):
    name = models.CharField(max_length=255)
    image = models.CharField(max_length=255, null=True)
    genre = models.CharField(max_length=255)
    date = models.DateField()
    time = models.TimeField(null=True)
    information = models.TextField()
    location = models.CharField(max_length=255)
    is_created = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name}"
    
class TicketSBT(models.Model):
    contract_name = models.CharField(max_length=255)
    contract_address = models.CharField(max_length=255)
    contract_owner_address = models.CharField(max_length=255)
    base_uri = models.CharField(max_length=255)
    event = models.ForeignKey(Event, on_delete=models.CASCADE, null=True)
    ticket_id = models.IntegerField()
    ticket_name = models.CharField(max_length=255)
    ticket_fee = models.DecimalField(max_digits=10, decimal_places=2)
    ticket_max_supply = models.IntegerField()

    def __str__(self):
        return f"Ticket(SBT) - {self.contract_name} - {self.ticket_name}"
    
class TicketBC(models.Model):
    contract_address = models.CharField(max_length=255)
    contract_owner_address = models.CharField(max_length=255)
    base_uri = models.CharField(max_length=255)
    ticket_name = models.CharField(max_length=255)
    ticket_symbol = models.CharField(max_length=255)
    mint_club_site= models.CharField(max_length=255)
    image = models.CharField(max_length=255)
    event = models.ForeignKey(Event, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f'''Ticket(BC) - {self.ticket_name}({self.ticket_symbol})'''
