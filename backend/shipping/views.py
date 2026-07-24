from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .services import get_shipping_options, create_checkout_session
from .serializers import CheckoutRequestSerializer

@api_view(["GET"])
def shipping_options(request):
    options = get_shipping_options()
    return Response({"options": options})

@api_view(["POST"])
def create_checkout(request):
    serializer = CheckoutRequestSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    data = serializer.validated_data

    line_items = [
        {
            "name": item["name"],
            "amount": int(item["amount"]),
            "quantity": int(item["quantity"]),
        }
        for item in data["line_items"]
    ]

    session = create_checkout_session(
        line_items=line_items,
        shipping_rate_id=data["shipping_rate_id"],
        success_url=data["success_url"],
        cancel_url=data["cancel_url"],
    )

    return Response({"session_id": session.id, "url": session.url})
