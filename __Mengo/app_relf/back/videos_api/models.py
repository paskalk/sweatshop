from django.db import models

# Create your models here.
class AddressItem(models.Model):
    address = models.CharField(max_length=255)
    is_bookmarked = models.BooleanField(default=False)

    def __str__(self):
        return self.address