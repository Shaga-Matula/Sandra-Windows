# Sandra Windows

A professional Django website for Sandra Windows - showcasing window installation and repair services with an interactive window customizer.

## Project Structure

```
Sandra-Windows/
├── sandra_windows/         # Django project settings
├── customizer/            # Django app
│   ├── models.py         # Database models
│   ├── views.py          # View logic
│   ├── templates/        # HTML templates
│   └── static/           # CSS, images
├── manage.py             # Django management
├── venv/                 # Virtual environment
└── README.md            # This file
```

## Technologies

- **Django 5.2** - Python web framework
- **Python 3.12** - Backend language
- **HTML5** - Structure and content
- **CSS3** - Styling and responsive design
- **SQLite** - Database
- **NO JavaScript** - Pure Django/Python implementation

## Getting Started

### Setup Virtual Environment

```bash
# Activate virtual environment
source venv/bin/activate  # Linux/Mac
# or
venv\Scripts\activate  # Windows
```

### Running the Server

Start the Django development server:

```bash
python manage.py runserver 0.0.0.0:8080
```

The server will run on port 8080. In Gitpod, the URL will be automatically generated.

### First Time Setup

```bash
# Run migrations
python manage.py makemigrations
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser
```

### Viewing the Website

Once the server is running, open the provided URL in your browser:
- Home page: `/`
- Customizer: `/customizer/`
- Admin: `/admin/`

## Features

- **Window Customizer** - Interactive tool to visualize different window colors and styles
- **3 House Types** - Modern, Traditional, Cottage
- **6 Window Colors** - White, Brown, Dark Gray, Black, Gold, Silver
- **6 Window Types** - Standard, Bay, Sliding, Casement, Awning, Picture
- **No JavaScript** - All interactivity handled by Django server-side
- **Responsive Design** - Works on desktop and mobile
- **Configuration Saving** - Save customer preferences to database

## Development

### Making Changes

1. Edit templates in `customizer/templates/`
2. Edit styles in `customizer/static/css/`
3. Edit views in `customizer/views.py`
4. Edit models in `customizer/models.py`
5. Run migrations if models change: `python manage.py makemigrations && python manage.py migrate`

### Git Workflow

```bash
# Check status
git status

# Add files
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push origin main
```

## Django Admin

Access the admin panel at `/admin/` to view saved window configurations.

## License

© 2024 Sandra Windows. All rights reserved.
