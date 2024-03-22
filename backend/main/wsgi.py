"""
WSGI config for inference_exe project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application
from main.utils.env_loader import default_env

os.environ.setdefault('DJANGO_SETTINGS_MODULE', default_env.DJANGO_SETTINGS_MODULE)

application = get_wsgi_application()
