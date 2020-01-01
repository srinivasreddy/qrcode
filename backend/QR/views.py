from django.shortcuts import render
from django.views.generic.edit import CreateView

from QR.models import QRCode


class QRCodeCreate(CreateView):
    model = QRCode
    fields = [
        "batch_number",
        "product_name",
        "qr_code",
        "qr_code_svg",
        "qr_code_pdf",
        "qr_code_jpg",
    ]
