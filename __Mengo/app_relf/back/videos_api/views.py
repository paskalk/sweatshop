# from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets

from videos_api import serializers
from videos_api import models
# Create your views here.

class AddressViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.AddressSerializer
    queryset = models.AddressItem.objects.all()

    def perform_create(self,serializer):
        serializer.save()

    # def list(self, request):
    #     saved_addresses = ['1','3','9']

    #     return Response({'message':'success','payload': saved_addresses})