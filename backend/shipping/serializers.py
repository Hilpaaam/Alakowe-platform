from rest_framework import serializers

class ShippingOptionSerializer(serializers.Serializer):
    id = serializers.CharField()
    display_name = serializers.CharField()
    amount = serializers.IntegerField()
    currency = serializers.CharField()
    min_days = serializers.IntegerField()
    max_days = serializers.IntegerField()

class CheckoutRequestSerializer(serializers.Serializer):
    line_items = serializers.ListField(
        child=serializers.DictField(child=serializers.CharField())
    )
    shipping_rate_id = serializers.CharField()
    success_url = serializers.URLField()
    cancel_url = serializers.URLField()
