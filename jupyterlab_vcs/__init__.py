
import json

import tornado.gen as gen
from tornado.httputil import url_concat
from tornado.httpclient import AsyncHTTPClient, HTTPRequest, HTTPError

from traitlets import Unicode, Bool
from traitlets.config import Configurable

from notebook.utils import url_path_join, url_escape
from notebook.base.handlers import APIHandler

__version__ = '0.0.1'


class VCSHandler(APIHandler):
    """
    Handler for vcs requests from the frontend of the extension
    """
    @gen.coroutine
    def get(self, path=''):
        print('got a get request on path {}'.format(path))

def _jupyter_server_extension_paths():
    return [{
        'module': 'jupyterlab-vcs'
    }]

def load_jupyter_server_extension(nb_server_app):
    """
    Called when the extension is loaded.
    Args:
        nb_server_app (NotebookWebApplication): handle to the Notebook webserver instance.
    """
    web_app = nb_server_app.web_app
    base_url = web_app.settings['base_url']
    endpoint = url_path_join(base_url, 'vcs')
    handlers = [(endpoint + "(.*)", VCSHandler)]
    web_app.add_handlers('.*$', handlers)
