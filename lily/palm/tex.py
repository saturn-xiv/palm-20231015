import logging
import tempfile
import os.path
import subprocess
import uuid

from io import BytesIO
from datetime import datetime

from . import lily_pb2, lily_pb2_grpc


def _tmp_root():
    return os.path.join(tempfile.tempdir())


class Service(lily_pb2_grpc.TexServicer):
    def __init__(self, s3, cache):
        super().__init__()
        self.s3 = s3
        self.cache = cache

    def ToPdf(self, request, context):

        logging.info("convert tex to pdf(%d) ", len(request.files))
        with tempfile.TemporaryDirectory(prefix='tex-') as root:
            for name in request.files:
                with open(os.path.join(root, name), mode='wb') as fd:
                    logging.debug("generate file %s/%s", root, name)
                    fd.write(request.files[name])
            for _ in range(2):
                subprocess.run(
                    ['xelatex', '-halt-on-error', 'main.tex'], cwd=root)

            pdf_file = os.path.join(root, 'main.pdf')
            pdf_size = os.path.getsize(pdf_file)
            with open(pdf_file, mode="rb") as fd:
                response = lily_pb2.File()
                response.content_type = 'application/pdf'
                response.name = '%s.pdf' % str(uuid.uuid4())
                response.bucket = datetime.now().strftime("%Y-%m")

                pdf_data = BytesIO(fd.read())
                self.s3.bucket_exists(response.bucket)
                self.s3.put_object(response.bucket, response.name,
                                   pdf_data, pdf_size, response.content_type)
                return response

    def ToWord(self, request, context):
        logging.info("convert tex to word %s" % request.content_type)
        response = lily_pb2.File()
        # TODO
        return response
