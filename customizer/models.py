from django.db import models

class WindowConfiguration(models.Model):
    HOUSE_CHOICES = [
        ('modern', 'Modern'),
        ('traditional', 'Traditional'),
        ('cottage', 'Cottage'),
    ]
    
    COLOR_CHOICES = [
        ('#FFFFFF', 'White'),
        ('#8B4513', 'Brown'),
        ('#2C3E50', 'Dark Gray'),
        ('#000000', 'Black'),
        ('#D4AF37', 'Gold'),
        ('#C0C0C0', 'Silver'),
    ]
    
    WINDOW_TYPE_CHOICES = [
        ('standard', 'Standard'),
        ('bay', 'Bay Window'),
        ('sliding', 'Sliding'),
        ('casement', 'Casement'),
        ('awning', 'Awning'),
        ('picture', 'Picture'),
    ]
    
    house_type = models.CharField(max_length=20, choices=HOUSE_CHOICES, default='modern')
    window_color = models.CharField(max_length=7, choices=COLOR_CHOICES, default='#FFFFFF')
    window_type = models.CharField(max_length=20, choices=WINDOW_TYPE_CHOICES, default='standard')
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.get_house_type_display()} - {self.get_window_color_display()}"
    
    class Meta:
        ordering = ['-created_at']
