from rest_framework  import serializers
from videos_api import models

class AddressSerializer(serializers.ModelSerializer):
    # address = serializers.CharField(max_length=255)

    class Meta:
        model = models.AddressItem
        fields = ('id', 'address', 'is_bookmarked')