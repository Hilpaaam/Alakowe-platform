from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    pass

class Order(models.Model):
    STATUS_CHOICES = [
        ("pending", "Pending"),
        ("paid", "Paid"),
        ("shipped", "Shipped"),
        ("delivered", "Delivered"),
        ("canceled", "Canceled"),
    ]

    user = models.ForeignKey(User, on_delete=models.PROTECT, related_name="orders")
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="pending")
    total_amount = models.PositiveIntegerField()  # in cents
    currency = models.CharField(max_length=3, default="usd")

    shipping_address = models.JSONField()
    shipping_rate_id = models.CharField(max_length=100, null=True, blank=True)
    stripe_session_id = models.CharField(max_length=200, null=True, blank=True)

    tracking_number = models.CharField(max_length=200, null=True, blank=True)
    carrier = models.CharField(max_length=100, null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Order {self.id} – {self.status}"
