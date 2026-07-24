import stripe
from django.conf import settings

stripe.api_key = settings.STRIPE_SECRET_KEY

def get_shipping_options():
    rates = stripe.ShippingRate.list(active=True, limit=10)
    options = []
    for r in rates.data:
        if r.type != "fixed_amount" or not r.fixed_amount:
            continue
        options.append({
            "id": r.id,
            "display_name": r.display_name or "Shipping",
            "amount": r.fixed_amount.amount,
            "currency": r.fixed_amount.currency,
            "min_days": r.delivery_estimate.minimum.value if r.delivery_estimate and r.delivery_estimate.minimum else 3,
            "max_days": r.delivery_estimate.maximum.value if r.delivery_estimate and r.delivery_estimate.maximum else 7,
        })
    return options

def create_checkout_session(line_items, shipping_rate_id, success_url, cancel_url):
    return stripe.checkout.Session.create(
        payment_method_types=["card"],
        mode="payment",
        line_items=[
            {
                "price_data": {
                    "currency": "usd",
                    "product_data": {"name": item["name"]},
                    "unit_amount": item["amount"],
                },
                "quantity": item["quantity"],
            }
            for item in line_items
        ],
        shipping_options=[{"shipping_rate": shipping_rate_id}],
        success_url=success_url,
        cancel_url=cancel_url,
    )
