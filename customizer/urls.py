from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('customizer/', views.CustomizerView.as_view(), name='customizer'),
]
