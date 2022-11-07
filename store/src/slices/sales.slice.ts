import { createSlice } from '@reduxjs/toolkit';



export const salesSlice = createSlice({
    name: 'sales',
    initialState: {
        users: {
            items: [
                {
                    id: 1,
                    username: 'admin',
                    password: 'admin',
                    role: 'admin',
                    createdAt: new Date().getTime(),
                    updateAt: new Date().getTime(),
                },
                {
                    id: 2,
                    username: 'user',
                    password: 'user',
                    role: 'user',
                    createdAt: new Date().getTime(),
                    updateAt: new Date().getTime(),
                },
            ],
            count: 2,
        },
        vendors: {
            items: [
                {
                    id: 1,
                    Nombre: 'JOSE MARIO GOMEZ HERNANDEZ',
                    Identificacion: {
                        Tipo: 1,
                        Numero: 112890644,
                    },
                    NombreComercial: 'MEDINA GH SYSTEMS',
                    Ubicacion: {
                        Provincia: 2,
                        Canton: 1,
                        Distrito: 8,
                        OtrasSenas: 'COSTADO NORTE DE LA IGLESIA',
                    },
                    Telefono: {
                        CodigoPais: 506,
                        NumTelefono: 24383956,
                    },
                    CorreoElectronico: 'josezero1@gmail.com',
                },
            ],
            count: 1,
        },
        customers: {
            items: [
                {
                    id: 1,
                    Nombre: 'SADEL-DOS MIL NUEVE ASESORES LEGALES Y CONTABLES SOCIEDAD ANONIMA',
                    Identificacion: {
                        Tipo: 2,
                        Numero: 3101493095,
                    },
                    NombreComercial:
                        'SADEL-DOS MIL NUEVE ASESORES LEGALES Y CONTABLES SOCIEDAD ANONIMA',
                    Ubicacion: {
                        Provincia: 1,
                        Canton: 9,
                        Distrito: 1,
                        OtrasSenas: 'DEL REST BACCHUS 200 M ESTE Y 50 NORTE',
                    },
                    Telefono: {
                        CodigoPais: 506,
                        NumTelefono: 22828476,
                    },
                    Fax: {
                        CodigoPais: 506,
                        NumTelefono: 22828476,
                    },
                    CorreoElectronico: 'kar.alvar@gmail.com',
                },
                {
                    id: 2,
                    Nombre: 'MATERIAS PARA CONCENTRADOS DE OJO DE AGUA SOCIEDAD ANONIMA',
                    Identificacion: {
                        Tipo: 2,
                        Numero: 3101068459,
                    },
                    NombreComercial:
                        'MATERIAS PARA CONCENTRADOS DE OJO DE AGUA SOCIEDAD ANONIMA',
                    Ubicacion: {
                        Provincia: 2,
                        Canton: 1,
                        Distrito: 5,
                        OtrasSenas:
                            '700 NORTE DE PALI DE SAN RAFAEL DE ALAJUELA',
                    },
                    Fax: {
                        CodigoPais: 506,
                        NumTelefono: 24397469,
                    },
                    CorreoElectronico: 'info@macoasa.com',
                },
            ],
            count: 2,
        },
        products: {
            items: [
                { id: 1, label: 'Home' },
                { id: 2, label: 'Features' },
                { id: 3, label: 'Contact' },
                { id: 4, label: 'About' },
                { id: 5, label: 'Content' },
            ],
            count: 5,
        },
        invoices: {
            items: [
                {
                    id: 1,
                    FacturaElectronica: {
                        Clave: 5.062410220001129e49,
                        CodigoActividad: 729001,
                        NumeroConsecutivo: 100001010000000060,
                        FechaEmision: '2022-10-24T18:14:27.327',
                        Emisor: {
                            Nombre: 'JOSE MARIO GOMEZ HERNANDEZ',
                            Identificacion: {
                                Tipo: 1,
                                Numero: 112890644,
                            },
                            NombreComercial: 'MEDINA GH SYSTEMS',
                            Ubicacion: {
                                Provincia: 2,
                                Canton: 1,
                                Distrito: 8,
                                OtrasSenas: 'COSTADO NORTE DE LA IGLESIA',
                            },
                            Telefono: {
                                CodigoPais: 506,
                                NumTelefono: 24383956,
                            },
                            CorreoElectronico: 'josezero1@gmail.com',
                        },
                        Receptor: {
                            Nombre: 'SADEL-DOS MIL NUEVE ASESORES LEGALES Y CONTABLES SOCIEDAD ANONIMA',
                            Identificacion: {
                                Tipo: 2,
                                Numero: 3101493095,
                            },
                            NombreComercial:
                                'SADEL-DOS MIL NUEVE ASESORES LEGALES Y CONTABLES SOCIEDAD ANONIMA',
                            Ubicacion: {
                                Provincia: 1,
                                Canton: 9,
                                Distrito: 1,
                                OtrasSenas:
                                    'DEL REST BACCHUS 200 M ESTE Y 50 NORTE',
                            },
                            Telefono: {
                                CodigoPais: 506,
                                NumTelefono: 22828476,
                            },
                            Fax: {
                                CodigoPais: 506,
                                NumTelefono: 22828476,
                            },
                            CorreoElectronico: 'kar.alvar@gmail.com',
                        },
                        CondicionVenta: 1,
                        MedioPago: 4,
                        DetalleServicio: {
                            LineaDetalle: {
                                NumeroLinea: 1,
                                Codigo: 8313200009900,
                                CodigoComercial: {
                                    Tipo: 4,
                                    Codigo: 1,
                                },
                                Cantidad: 1,
                                UnidadMedida: 'Unid',
                                Detalle:
                                    'OTROS SERVICIOS DE SOPORTE EN TECNOLOGÍAS DE INFORMACIÓN',
                                PrecioUnitario: 26549,
                                MontoTotal: 26549,
                                SubTotal: 26549,
                                Impuesto: {
                                    Codigo: 1,
                                    CodigoTarifa: 8,
                                    Tarifa: 13,
                                    Monto: 3451.37,
                                },
                                MontoTotalLinea: 30000.37,
                            },
                        },
                        ResumenFactura: {
                            CodigoTipoMoneda: {
                                CodigoMoneda: 'CRC',
                                TipoCambio: 1,
                            },
                            TotalMercanciasGravadas: 26549,
                            TotalGravado: 26549,
                            TotalVenta: 26549,
                            TotalVentaNeta: 26549,
                            TotalImpuesto: 3451.37,
                            TotalComprobante: 30000.37,
                        },
                        Otros: {
                            OtroTexto: '-- ATV Comprobante Electrónico --',
                        },
                        Signature: {
                            SignedInfo: {
                                CanonicalizationMethod: '',
                                SignatureMethod: '',
                                Reference: [
                                    {
                                        Transforms: {
                                            Transform: '',
                                        },
                                        DigestMethod: '',
                                        DigestValue:
                                            'FPgysC8uSd7DDMjHReueAMvkjzhRVcyaRE6GSv+x3Ys=',
                                    },
                                    {
                                        DigestMethod: '',
                                        DigestValue:
                                            'rVsNlxc0UjCWATrncvGMxUK7UCk9N3HGU3vGAtaPmRQ=',
                                    },
                                    {
                                        DigestMethod: '',
                                        DigestValue:
                                            'h6CKbCvF2hz/4dmQRsPJ26WUE8HApGDtS75TuvRIspw=',
                                    },
                                ],
                            },
                            SignatureValue:
                                'SlkKDJmEaL04YxcsFMEOvc+ciJNF03luGIQf8SeHFLdKstO/n8BcjmavTqMYE7i9kVJ+YizNv9etWcDk2B3XkRfKGHsU5dwMdc1oVLy9ythnaR28f/xk4FEx0I+3V8E86dUGUzUsGvaDOiieHQND8nIHzj9VPjfjeFp8iEN9POLHx3Yg90PHZclusPr7U5r/STnAcnvTNGVQb4H2bmZpKY0vS6FsPWUqQsjz6baVHBLm1cJCr+x8+Qc1yRCfd/k3S19myVrj71tM1PODDHTfasiXNDk7ycVRglml9uatbAtDJGYELVF0Q6Lhis7blOU3JTUy8ILbFn68bMRbssG2GQ==',
                            KeyInfo: {
                                X509Data: {
                                    X509Certificate:
                                        'MIIFRzCCAy+gAwIBAgIGAYMzz5E4MA0GCSqGSIb3DQEBCwUAMFgxCzAJBgNVBAYTAkNSMR8wHQYDVQQKDBZNSU5JU1RFUklPIERFIEhBQ0lFTkRBMQwwCgYDVQQLDANER1QxGjAYBgNVBAMMEUNBIFBFUlNPTkEgRklTSUNBMB4XDTIyMDkxMjIyMjYyNFoXDTI2MDkxMTIyMjYyNFowgaMxGTAXBgNVBAUTEENQRi0wMS0xMjg5LTA2NDQxGDAWBgNVBAQMD0dPTUVaIEhFUk5BTkRFWjETMBEGA1UEKgwKSk9TRSBNQVJJTzELMAkGA1UEBhMCQ1IxFzAVBgNVBAoMDlBFUlNPTkEgRklTSUNBMQwwCgYDVQQLDANDUEYxIzAhBgNVBAMMGkpPU0UgTUFSSU8gR09NRVogSEVSTkFOREVaMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmEyzB+qqk397hEYGMtRWdC1SPrX+ii20Cii3bz1qB6SdjpHjeILfkAub4XYgNX9j9tIH5CifYbRJVyuMVIn5dwkv3jCi0XhsQp4C/Sk+9CuP5tTKCMO0EpCG9MdeWMdnd9SBL/gMYQiJHlIT22EraK8bwptJ2TdAymK6WSmMervSuTrN48q0qPRdBBBwzWZgDpRvFLjZICduzZbY7lDC3My7S+9vYTtr29MiMRtZX3trNpgnTpqrEr1lOLV8433AgPrL7fe5E1zcdj+Njw5m1GdvmvkZVL6j3j47/HmV5YRAn2eMOsuB5jUIMWvBH/67eVSLiNCLtPrk6cbZH3E7eQIDAQABo4HKMIHHMB8GA1UdIwQYMBaAFBP2akEN7aIkRdHIlKhBg3xiJWtZMB0GA1UdDgQWBBTGQXsbzQL/AeUx+Ik5Lu5lsN65uDALBgNVHQ8EBAMCBsAwEwYDVR0lBAwwCgYIKwYBBQUHAwQwYwYIKwYBBQUHAQEEVzBVMFMGCCsGAQUFBzAChkdodHRwczovL3BraS5jb21wcm9iYW50ZXNlbGVjdHJvbmljb3MuZ28uY3IvcHJvZC9pbnRlcm1lZGlhdGUtcGYtcGVtLmNydDANBgkqhkiG9w0BAQsFAAOCAgEAfYt9CugziAouHHd3VtbCc4U81kEVr2bbm9TWAQN7g6j47C/OnBFbZyXNzQhgYqob8VP8wzYa+dEl+/ogIlJY0jg94GVWHVl1eaF5d6epZebWoL1GEQJH6aDGuLNMtlWQ6a+7qTNSEzaZjiICLXB9yGB4Iz4iZ87j/yxx9HLnY32OkhFkLBVxcujF1A2CTbMOOmT+FTmrwqxHowNM0qzckjyr21Zu7HmbPA564m3JKPD5Z+b8aMOVXh6ZFv/M/xDN5hPA13wnVhEBFdQ4W3hYEUmVsJQ/PWXjgVxJxqafndhmwfRqdzMvnH9IkQelgxyRavwrXCfZPwfscwV5pOudVVkrh7W9qpCSlZARGFPf7UiPEktXonTidYSaqnONwNfpkYfP3M04qPDVnMT0U5xOt3rjdFQV++y89iFOEiG9zamtCRPEixAuP/cU6UrfysmuGwqGy2uQPWjSM6Lm8QPdVTxZEFUGJ4YEizRReZFPe7YB9FBiKnBFPUpem/r2Y1SB+thiP1QfdP76MLfLjg9LWxPORw0Km3zBeGbHzquTMMbLrqufHvlcDotYH9+NUN2p+TtcVwhJN38EBsFmHOoSt7m/OdkuZJ+OJc/89+GG+xym+cNklYVGBAGW1wFWL1llO0TLet+sgYW451asu/OCWVnYuTMHM+Sh1aXA4ffDZTY=',
                                },
                                KeyValue: {
                                    RSAKeyValue: {
                                        Modulus:
                                            'mEyzB+qqk397hEYGMtRWdC1SPrX+ii20Cii3bz1qB6SdjpHjeILfkAub4XYgNX9j9tIH5CifYbRJVyuMVIn5dwkv3jCi0XhsQp4C/Sk+9CuP5tTKCMO0EpCG9MdeWMdnd9SBL/gMYQiJHlIT22EraK8bwptJ2TdAymK6WSmMervSuTrN48q0qPRdBBBwzWZgDpRvFLjZICduzZbY7lDC3My7S+9vYTtr29MiMRtZX3trNpgnTpqrEr1lOLV8433AgPrL7fe5E1zcdj+Njw5m1GdvmvkZVL6j3j47/HmV5YRAn2eMOsuB5jUIMWvBH/67eVSLiNCLtPrk6cbZH3E7eQ==',
                                        Exponent: 'AQAB',
                                    },
                                },
                            },
                            Object: {
                                QualifyingProperties: {
                                    SignedProperties: {
                                        SignedSignatureProperties: {
                                            SigningTime:
                                                '2022-10-24T18:15:12-06:00',
                                            SigningCertificate: {
                                                Cert: {
                                                    CertDigest: {
                                                        DigestMethod: '',
                                                        DigestValue:
                                                            'CAZ1brxpAjwGn4KwJ1XwmYwddy5wmzAyzP9Oz8M/dNU=',
                                                    },
                                                    IssuerSerial: {
                                                        X509IssuerName:
                                                            'CN=CA PERSONA FISICA, OU=DGT, O=MINISTERIO DE HACIENDA, C=CR',
                                                        X509SerialNumber: 1663021584696,
                                                    },
                                                },
                                            },
                                            SignaturePolicyIdentifier: {
                                                SignaturePolicyId: {
                                                    SigPolicyId: {
                                                        Identifier:
                                                            'https://atv.hacienda.go.cr/ATV/ComprobanteElectronico/docs/esquemas/2016/v4.3/Resolucin_General_sobre_disposiciones_tecnicas_comprobantes_electronicos_para_efectos_tributarios.pdf',
                                                        Description: '',
                                                    },
                                                    SigPolicyHash: {
                                                        DigestMethod: '',
                                                        DigestValue:
                                                            'MDE1Yjk4NTQ4MmUyYzU1Zjk5MzZjNGQwNDA5MmM4ODQzZDg5NzE4ZjA4YmZmYmYxZDcyZjY4MGE5YTRmZGIzMA==',
                                                    },
                                                },
                                            },
                                        },
                                        SignedDataObjectProperties: {
                                            DataObjectFormat: {
                                                MimeType: 'text/xml',
                                                Encoding: 'UTF-8',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                {
                    id: 2,
                    FacturaElectronica: {
                        Clave: 5.061609220001129e49,
                        CodigoActividad: 729001,
                        NumeroConsecutivo: 100001010000000060,
                        FechaEmision: '2022-09-16T18:35:20.610',
                        Emisor: {
                            Nombre: 'JOSE MARIO GOMEZ HERNANDEZ',
                            Identificacion: {
                                Tipo: 1,
                                Numero: 112890644,
                            },
                            NombreComercial: 'MEDINA GH SYSTEMS',
                            Ubicacion: {
                                Provincia: 2,
                                Canton: 1,
                                Distrito: 8,
                                OtrasSenas: 'COSTADO NORTE DE LA IGLESIA',
                            },
                            Telefono: {
                                CodigoPais: 506,
                                NumTelefono: 24383956,
                            },
                            CorreoElectronico: 'josezero1@gmail.com',
                        },
                        Receptor: {
                            Nombre: 'MATERIAS PARA CONCENTRADOS DE OJO DE AGUA SOCIEDAD ANONIMA',
                            Identificacion: {
                                Tipo: 2,
                                Numero: 3101068459,
                            },
                            NombreComercial:
                                'MATERIAS PARA CONCENTRADOS DE OJO DE AGUA SOCIEDAD ANONIMA',
                            Ubicacion: {
                                Provincia: 2,
                                Canton: 1,
                                Distrito: 5,
                                OtrasSenas:
                                    '700 NORTE DE PALI DE SAN RAFAEL DE ALAJUELA',
                            },
                            Fax: {
                                CodigoPais: 506,
                                NumTelefono: 24397469,
                            },
                            CorreoElectronico: 'info@macoasa.com',
                        },
                        CondicionVenta: 1,
                        MedioPago: 1,
                        DetalleServicio: {
                            LineaDetalle: {
                                NumeroLinea: 1,
                                Codigo: 8713000000000,
                                CodigoComercial: {
                                    Tipo: 4,
                                    Codigo: 1,
                                },
                                Cantidad: 1,
                                UnidadMedida: 'Unid',
                                Detalle:
                                    'SERVICIOS DE MANTENIMIENTO Y REPARACION DE COMPUTADORES Y EQUIPO PERIFERICO',
                                PrecioUnitario: 44248,
                                MontoTotal: 44248,
                                SubTotal: 44248,
                                Impuesto: {
                                    Codigo: 1,
                                    CodigoTarifa: 8,
                                    Tarifa: 13,
                                    Monto: 5752.24,
                                },
                                MontoTotalLinea: 50000.24,
                            },
                        },
                        ResumenFactura: {
                            CodigoTipoMoneda: {
                                CodigoMoneda: 'CRC',
                                TipoCambio: 1,
                            },
                            TotalMercanciasGravadas: 44248,
                            TotalGravado: 44248,
                            TotalVenta: 44248,
                            TotalVentaNeta: 44248,
                            TotalImpuesto: 5752.24,
                            TotalComprobante: 50000.24,
                        },
                        Otros: {
                            OtroTexto: '-- ATV Comprobante Electrónico --',
                        },
                        Signature: {
                            SignedInfo: {
                                CanonicalizationMethod: '',
                                SignatureMethod: '',
                                Reference: [
                                    {
                                        Transforms: {
                                            Transform: '',
                                        },
                                        DigestMethod: '',
                                        DigestValue:
                                            '+J/ba/mv8ZWzxGqMYYlDNr/M7oyZI6hc1JctTyrlui8=',
                                    },
                                    {
                                        DigestMethod: '',
                                        DigestValue:
                                            'l1LgMVYc88kTaCCJ4zkulnQr7nbcXs4KgA37MnnFTpI=',
                                    },
                                    {
                                        DigestMethod: '',
                                        DigestValue:
                                            'Ult0gWbKpQn/x1walvzrO6pX7udEUQjFeSJPziPmYlU=',
                                    },
                                ],
                            },
                            SignatureValue:
                                'MPBUVKf26izpfYDKEIo31iDnGFD4tKJU8nOnBptr2VmOhHsmYhjY4tjI2FrOuvPkTtj5vbJ3zk73wg964z2bG3cS2zd60TQFuss+Bdc2YHVLFYz/Qv0KrFZaT86KZXsR8Jwl7FppehQu2OCe+nGpeFFMKMlHB7kn9aNxiWpTGsrMjTJSdxPfOJE4pR69nVLHqkkcypluRMU7sqYPB77uy0LAZvin8cZ8b4Ybzrr+Kvp5EDlpXFrsiDpSKyWkzWcYnlXxi0XebEFnbzynZydbJLNHhWaCQLdI0z0NeX/TB/1IaA0869x0pVf5veNfYgJyhC1ARvUoj5ngaA8UYn3m2A==',
                            KeyInfo: {
                                X509Data: {
                                    X509Certificate:
                                        'MIIFRzCCAy+gAwIBAgIGAYMzz5E4MA0GCSqGSIb3DQEBCwUAMFgxCzAJBgNVBAYTAkNSMR8wHQYDVQQKDBZNSU5JU1RFUklPIERFIEhBQ0lFTkRBMQwwCgYDVQQLDANER1QxGjAYBgNVBAMMEUNBIFBFUlNPTkEgRklTSUNBMB4XDTIyMDkxMjIyMjYyNFoXDTI2MDkxMTIyMjYyNFowgaMxGTAXBgNVBAUTEENQRi0wMS0xMjg5LTA2NDQxGDAWBgNVBAQMD0dPTUVaIEhFUk5BTkRFWjETMBEGA1UEKgwKSk9TRSBNQVJJTzELMAkGA1UEBhMCQ1IxFzAVBgNVBAoMDlBFUlNPTkEgRklTSUNBMQwwCgYDVQQLDANDUEYxIzAhBgNVBAMMGkpPU0UgTUFSSU8gR09NRVogSEVSTkFOREVaMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmEyzB+qqk397hEYGMtRWdC1SPrX+ii20Cii3bz1qB6SdjpHjeILfkAub4XYgNX9j9tIH5CifYbRJVyuMVIn5dwkv3jCi0XhsQp4C/Sk+9CuP5tTKCMO0EpCG9MdeWMdnd9SBL/gMYQiJHlIT22EraK8bwptJ2TdAymK6WSmMervSuTrN48q0qPRdBBBwzWZgDpRvFLjZICduzZbY7lDC3My7S+9vYTtr29MiMRtZX3trNpgnTpqrEr1lOLV8433AgPrL7fe5E1zcdj+Njw5m1GdvmvkZVL6j3j47/HmV5YRAn2eMOsuB5jUIMWvBH/67eVSLiNCLtPrk6cbZH3E7eQIDAQABo4HKMIHHMB8GA1UdIwQYMBaAFBP2akEN7aIkRdHIlKhBg3xiJWtZMB0GA1UdDgQWBBTGQXsbzQL/AeUx+Ik5Lu5lsN65uDALBgNVHQ8EBAMCBsAwEwYDVR0lBAwwCgYIKwYBBQUHAwQwYwYIKwYBBQUHAQEEVzBVMFMGCCsGAQUFBzAChkdodHRwczovL3BraS5jb21wcm9iYW50ZXNlbGVjdHJvbmljb3MuZ28uY3IvcHJvZC9pbnRlcm1lZGlhdGUtcGYtcGVtLmNydDANBgkqhkiG9w0BAQsFAAOCAgEAfYt9CugziAouHHd3VtbCc4U81kEVr2bbm9TWAQN7g6j47C/OnBFbZyXNzQhgYqob8VP8wzYa+dEl+/ogIlJY0jg94GVWHVl1eaF5d6epZebWoL1GEQJH6aDGuLNMtlWQ6a+7qTNSEzaZjiICLXB9yGB4Iz4iZ87j/yxx9HLnY32OkhFkLBVxcujF1A2CTbMOOmT+FTmrwqxHowNM0qzckjyr21Zu7HmbPA564m3JKPD5Z+b8aMOVXh6ZFv/M/xDN5hPA13wnVhEBFdQ4W3hYEUmVsJQ/PWXjgVxJxqafndhmwfRqdzMvnH9IkQelgxyRavwrXCfZPwfscwV5pOudVVkrh7W9qpCSlZARGFPf7UiPEktXonTidYSaqnONwNfpkYfP3M04qPDVnMT0U5xOt3rjdFQV++y89iFOEiG9zamtCRPEixAuP/cU6UrfysmuGwqGy2uQPWjSM6Lm8QPdVTxZEFUGJ4YEizRReZFPe7YB9FBiKnBFPUpem/r2Y1SB+thiP1QfdP76MLfLjg9LWxPORw0Km3zBeGbHzquTMMbLrqufHvlcDotYH9+NUN2p+TtcVwhJN38EBsFmHOoSt7m/OdkuZJ+OJc/89+GG+xym+cNklYVGBAGW1wFWL1llO0TLet+sgYW451asu/OCWVnYuTMHM+Sh1aXA4ffDZTY=',
                                },
                                KeyValue: {
                                    RSAKeyValue: {
                                        Modulus:
                                            'mEyzB+qqk397hEYGMtRWdC1SPrX+ii20Cii3bz1qB6SdjpHjeILfkAub4XYgNX9j9tIH5CifYbRJVyuMVIn5dwkv3jCi0XhsQp4C/Sk+9CuP5tTKCMO0EpCG9MdeWMdnd9SBL/gMYQiJHlIT22EraK8bwptJ2TdAymK6WSmMervSuTrN48q0qPRdBBBwzWZgDpRvFLjZICduzZbY7lDC3My7S+9vYTtr29MiMRtZX3trNpgnTpqrEr1lOLV8433AgPrL7fe5E1zcdj+Njw5m1GdvmvkZVL6j3j47/HmV5YRAn2eMOsuB5jUIMWvBH/67eVSLiNCLtPrk6cbZH3E7eQ==',
                                        Exponent: 'AQAB',
                                    },
                                },
                            },
                            Object: {
                                QualifyingProperties: {
                                    SignedProperties: {
                                        SignedSignatureProperties: {
                                            SigningTime:
                                                '2022-09-16T18:36:16-06:00',
                                            SigningCertificate: {
                                                Cert: {
                                                    CertDigest: {
                                                        DigestMethod: '',
                                                        DigestValue:
                                                            'CAZ1brxpAjwGn4KwJ1XwmYwddy5wmzAyzP9Oz8M/dNU=',
                                                    },
                                                    IssuerSerial: {
                                                        X509IssuerName:
                                                            'CN=CA PERSONA FISICA, OU=DGT, O=MINISTERIO DE HACIENDA, C=CR',
                                                        X509SerialNumber: 1663021584696,
                                                    },
                                                },
                                            },
                                            SignaturePolicyIdentifier: {
                                                SignaturePolicyId: {
                                                    SigPolicyId: {
                                                        Identifier:
                                                            'https://atv.hacienda.go.cr/ATV/ComprobanteElectronico/docs/esquemas/2016/v4.3/Resolucin_General_sobre_disposiciones_tecnicas_comprobantes_electronicos_para_efectos_tributarios.pdf',
                                                        Description: '',
                                                    },
                                                    SigPolicyHash: {
                                                        DigestMethod: '',
                                                        DigestValue:
                                                            'MDE1Yjk4NTQ4MmUyYzU1Zjk5MzZjNGQwNDA5MmM4ODQzZDg5NzE4ZjA4YmZmYmYxZDcyZjY4MGE5YTRmZGIzMA==',
                                                    },
                                                },
                                            },
                                        },
                                        SignedDataObjectProperties: {
                                            DataObjectFormat: {
                                                MimeType: 'text/xml',
                                                Encoding: 'UTF-8',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            ],
            count: 2,
        },
        orders: {
            items: [
                { id: 1, label: 'Home' },
                { id: 2, label: 'Features' },
                { id: 3, label: 'Contact' },
                { id: 4, label: 'About' },
                { id: 5, label: 'Content' },
            ],
            count: 5,
        },
    },
    reducers: {
        add: (state) => {
            state.users.count += 1;
        },
        reset: (state) => {
            state.users.items = [];
            state.users.count = 0;
        },
    },
});
