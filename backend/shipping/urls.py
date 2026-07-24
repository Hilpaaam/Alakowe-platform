from django.urls import path
from . import views

urlpatterns = [
    path("options/", views.shipping_options),
    path("checkout/", views.create_checkout),
]
