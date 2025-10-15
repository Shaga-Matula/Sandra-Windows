from django.shortcuts import render, redirect
from django.views import View
from .models import WindowConfiguration

def home(request):
    return render(request, 'customizer/home.html')

class CustomizerView(View):
    def get(self, request):
        house_type = request.GET.get('house', 'modern')
        window_color = request.GET.get('color', '#FFFFFF')
        window_type = request.GET.get('type', 'standard')
        
        # Get color name from choices
        color_name = dict(WindowConfiguration.COLOR_CHOICES).get(window_color, 'White')
        
        context = {
            'house_type': house_type,
            'window_color': window_color,
            'color_name': color_name,
            'window_type': window_type,
            'house_choices': WindowConfiguration.HOUSE_CHOICES,
            'color_choices': WindowConfiguration.COLOR_CHOICES,
            'type_choices': WindowConfiguration.WINDOW_TYPE_CHOICES,
        }
        return render(request, 'customizer/customizer.html', context)
    
    def post(self, request):
        house_type = request.POST.get('house_type', 'modern')
        window_color = request.POST.get('window_color', '#FFFFFF')
        window_type = request.POST.get('window_type', 'standard')
        
        # Save configuration
        WindowConfiguration.objects.create(
            house_type=house_type,
            window_color=window_color,
            window_type=window_type
        )
        
        return redirect(f'/customizer/?house={house_type}&color={window_color}&type={window_type}')
