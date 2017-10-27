import os, os.path
import cherrypy

class InimpWebApp(object):
    @cherrypy.expose
    def index(self):
        return open('index.html')


if __name__ == '__main__':
    conf = {
        '/': {
            'tools.sessions.on': True,
            'tools.staticdir.root': os.path.abspath(os.getcwd())
        },
        '/static': {
            'tools.staticdir.on': True,
            'tools.staticdir.dir': './public'
        }
    }
    cherrypy.quickstart(InimpWebApp(), '/', conf)