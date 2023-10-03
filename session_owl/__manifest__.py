{
    'name': 'Owl Session',
    'version': '16.0.1.0.0',
    'category': '',
    'website': 'https://www.cybrosys.com',
    'company': 'Cybrosys Techno Solutions',
    'depends': ['base','web'],
    'data': [
        'security/ir.model.access.csv',
    ],
    'assets': {
            'web.assets_backend': [
                'session_owl/static/src/js/field_widget.js',
                'session_owl/static/src/js/systray.js',
                'session_owl/static/src/xml/field_widget.xml',
                'session_owl/static/src/xml/systray.xml'
            ],
    },
    'license': 'AGPL-3',
    'installable': True,
    'application': True,
    'auto_install': False,
}