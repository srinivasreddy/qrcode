import base64
import json
from io import BytesIO

from django.http import JsonResponse, request
from django.shortcuts import redirect, render
from django.views.generic.edit import CreateView

import qrcode
import qrcode.image.svg

from QR.models import QRCode


class QRCodeCreate(CreateView):
    model = QRCode
    fields = [
        "batch_number",
        "product_name",
    ]

    def _make_qr_code(self, batch_number, product_name):
        data = batch_number + "-" + product_name
        return qrcode.make(data, image_factory=qrcode.image.svg.SvgImage)

    def post(self, *args, **kwargs):
        super(QRCodeCreate, self).post(request)
        data = json.loads(self.request.body.decode("utf-8"))
        svg = self._make_qr_code(data["batchNumber"], data["productName"])
        b = BytesIO()
        svg.save(b)
        return JsonResponse(
            {"svgBinary": base64.encodestring(b.getvalue()).decode("utf-8")}
        )
