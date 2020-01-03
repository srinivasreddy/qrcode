import json

from django.http import request
from django.shortcuts import redirect, render
from django.views.generic.edit import CreateView

import qrcode

from QR.models import QRCode


class QRCodeCreate(CreateView):
    model = QRCode
    fields = [
        "batch_number",
        "product_name",
    ]

    def _make_qr_code(self, batch_number, product_name):
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrgenerator.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        qr.add_data("Some data")
        qr.make(fit=True)
        img = qr.make_image(fill_color="black", back_color="white")

    def post(self, *args, **kwargs):
        super(QRCodeCreate, self).post(request)
        data = json.loads(self.request.body.decode("utf-8"))
        svg = self._make_qr_code(data["batchNumber"], data["productName"])
        return redirect("/")
