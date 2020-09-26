from django.urls import path, include
from rest_framework.routers import DefaultRouter
from videos_api import views

router = DefaultRouter()
router.register('testaddresses', views.AddressViewSet, basename='testaddresses')

urlpatterns = [
    path('', include(router.urls))
]