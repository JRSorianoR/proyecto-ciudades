var picDic = {
    "AGS_Aguascalientes": ["https://livitmexico.com/assets/img/estados/aguascalientes/isla-san-marcos.jpg", "https://api-cms.gayosso.com/storage/agencias/ags_agencia_1.jpg", "https://pueblomx.com/wp-content/uploads/2022/10/aniversario.jpg", "https://livitmexico.com/assets/img/estados/aguascalientes/el-sabinal.jpg"],
    "AGS_Asientos": ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/1e/e7/dd/photo7jpg.jpg?w=700&h=500&s=1", "https://www.asere.com/wp-content/uploads/2020/06/Oaxaca-Me%CC%81xico.jpg", "https://travmex.com/wp-content/uploads/2022/02/Tacos-al-Pastor-1-cropped-700x500.jpg", "https://travmex.com/wp-content/uploads/2022/02/Mexican-beach-destination-1-700x500.jpg"],
    "AGS_Calvillo": ["https://mexicodesconocidoviajes.mx/wp-content/uploads/2020/09/MD_CALVILLO_RUTA-DEL-ARTISTA_PJ_ok-700x500.jpg", "https://api-cms.gayosso.com/storage/cementerios/san_ignacio_1.1.jpg", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/76/c8/9c/worth-a-25-minute-drive.jpg?w=700&h=500&s=1", "https://neomexicanismos.com/wp-content/uploads/2016/12/calvillo-800x600-700x500.jpg"],
    "AGS_Cosio": ["https://i0.wp.com/labrecha.me/wp-content/uploads/2022/07/Muestra-Nacional-de-Danzo%CC%81n-0-2.jpg?fit=700%2C500&ssl=1", "https://reportajesmetropolitanos.com.mx/morelos15.jpg", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/e3/52/e2/cosio-valtellino.jpg?w=700&h=500&s=1", "https://infogruas.com.mx/wp-content/uploads/gruas-en-cosio.jpg"],
    "AGS_El_Llano": ["https://informativoelvalledeaguascalientes.online/wp-content/uploads/2022/10/IMG-20221022-WA0127.jpg", "https://s2.wklcdn.com/image_158/4762285/45724419/30081125Master.jpg", "https://s0.wklcdn.com/image_124/3722050/47103043/31074318Master.jpg" ,"https://s0.wklcdn.com/image_205/6160083/47322186/31368858Master.jpg"],
    "BCN_Ensenada": ["https://1.bp.blogspot.com/-Jo-EwfA7a1w/Xd9wiGN8_wI/AAAAAAAAfc4/jdmAqWBrprUhBOIdYt9VvQB5piJ-j9bJwCLcBGAsYHQ/s1600/PLAYA-ENSENADA-GRANDE-LA-PAZ-VIAJA-BONITO-1.jpg", "https://www.puertoensenada.com.mx/upl/sec/movimiento_portuario_2017.jpg", "https://xpectrofm.com/wp-content/uploads/2022/08/Seguridad-controlada-75.jpg", "https://ensenadahoy.com/pub/publicaciones/org_22837.jpg"],
    "BCN_Mexicali": ["https://www.gob.mx/cms/uploads/image/file/731965/FOo8R6UWQAkmEzd.jpg", "https://live.staticflickr.com/4809/31272737717_0005b2f025_h.jpg", "https://live.staticflickr.com/65535/49347198467_4060288a40_h.jpg", "https://lh3.googleusercontent.com/p/AF1QipOhwad7a7CNiBtqXisIk1VwybV3NQ8x7nk_tv_L=s1600-w1920"],
    "BCN_Playas_de_Rosarito": ["https://i0.wp.com/tijuananoticias.info/bc/wp-content/uploads/2022/11/01cda380-b788-43f9-a091-fcc5a57c77b5.jpg?ssl=1", "https://media.vogue.mx/photos/5fde389155efa4fbe27605e1/master/w_1600%2Cc_limit/playa-Rosarito-Me%25CC%2581xico.jpg", "https://seturistabc.com/wp-content/uploads/2022/09/hotel-rosarito-city-express-alberca-2.jpg", "http://gcadena.com/inmobiliaria/wp-content/uploads/2018/08/209549-rosarito-beach.jpg"],
    "BCN_Tecate": ["https://4.bp.blogspot.com/-omuGaFeiCa0/XGZY-vmNvEI/AAAAAAAABMs/_mNT6peagnkW7_rXY4xD6p09TDJ3k-zfACKgBGAs/s1600/Tecate%2B-%2BBaja%2BCalifornia%2B%25285%2529.jpg", "https://cadenanoticias.com/assets/article/00115514/20210521_mcBam9Ju50.jpeg", "http://wsextbc.ebajacalifornia.gob.mx/CdnBC/api/Imagenes/ObtenerImagenDeSistema?sistemaSolicitante=AdmonPortal/4/6846/20220822&nombreArchivo=se.png&descargar=false", "https://static01.nyt.com/images/2017/04/30/travel/30BAJA/30BAJA-videoSixteenByNineJumbo1600.jpg"],
    "BCN_Tijuana": ["https://amotijuana.com/wp-content/uploads/2018/04/67776-Centro-Cultural-Tijuana.jpg", "https://cadenanoticias.com/assets/article/00129216/20220205_EnOTiw4pmx.jpeg", "https://cadenanoticias.com/assets/article/00140946/20220831_YbK7jZhmQl.jpeg", "https://static.jornadabc.com.mx/wp-content/uploads/2022/04/viviendas-en-Tijuana.jpeg"],
    "BCS_Comondu": ["https://biolafmx.com/wp-content/uploads/2021/10/Actividad-agricola-en-Comondu-Baja-California-Sur-portada.jpg", "https://hoybcs.com/wp-content/uploads/2022/07/8ABD4449-EF49-4BA3-A8D3-6BA7F1321AC5.jpeg", "https://i0.wp.com/panoramaagrario.com/wp-content/uploads/2014/09/ORGANICA.jpg?fit=1600%2C900&ssl=1", "https://s2.wklcdn.com/image_218/6550189/59729577/39847715Master.jpg"],
    "BCS_La_Paz": ["https://1.bp.blogspot.com/-Jo-EwfA7a1w/Xd9wiGN8_wI/AAAAAAAAfc4/jdmAqWBrprUhBOIdYt9VvQB5piJ-j9bJwCLcBGAsYHQ/s1600/PLAYA-ENSENADA-GRANDE-LA-PAZ-VIAJA-BONITO-1.jpg", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/5b/cc/9c/costa-baja-resort.jpg?w=1600&h=900&s=1/", "https://www.peterktravels.com/wp-content/uploads/2014/02/IMG_6753b.jpg", "https://lh5.googleusercontent.com/p/AF1QipPu6aAYLJI-0rCNk0_7dqblH_9n3GZ9RNvRzKvA=s1600"],
    "BCS_Loreto": ["https://tpcdanzantebay.mx/wp-content/uploads/2018/07/home_islands.jpg", "https://tpcdanzantebay.mx/wp-content/uploads/2020/06/home_getting_here.jpg", "https://loretorubiosportfishing.com/mx/public/uploads/destination-20.jpg", "https://a0.muscache.com/pictures/3efa5cc5-3d2a-490d-8c49-f7b95015081c.jpg"],
    "BCS_Los_Cabos": ["https://villaexperience.com/wp-content/uploads/2020/11/hacienda-beach-condo-cabo-1-51.jpg", "https://cdn.photos.sparkplatform.com/cab/20221105195957887154000000-o.jpg", "https://images2.imgbox.com/54/23/i8NpfCOy_o.jpeg", "https://indemloscabos.gob.mx/wp-content/uploads/2021/11/4-6.jpg"],
    "BCS_Mulege": ["https://lh5.googleusercontent.com/p/AF1QipO6Goo943cO17rDp0i-2hKpeKHqH292IcWqBKdb=s1600", "https://lh5.googleusercontent.com/p/AF1QipMVVic4r0UU_TlviVkA4DmsIyKQfbERqX9nZlkA=s1600", "http://2.bp.blogspot.com/-cLZDmO8qNjw/UnWUFjX-DkI/AAAAAAABlNs/xFw7vkBsCgk/s1600/P1180736.JPG", "https://lh5.googleusercontent.com/p/AF1QipOrYFT33u5TFLh1Cb_S0nzKIKJGyRFhe9DFGfgc=s1600"],
    "CAM_Calakmul": ["https://lugares.inah.gob.mx/images/zonas/media/1661/_thumb1/226_A_000.jpg", "https://cnnespanol.cnn.com/wp-content/uploads/2022/10/221027160200-inah-hallazgos-calakmul-zona-arqueologica-mayas-redaccion-mexico-full-169.jpg?quality=100&strip=info", "https://villacalakmul.mx/images/portada2.jpeg", "https://2.bp.blogspot.com/-cjj4PH6Fpr8/XDKwpCsVhUI/AAAAAAAADqY/_24eKDzmUoUvvNAJX5JA7Hak7tl3QjCbgCLcBGAs/s1600/I.%2BVuelvo%2Ba%2Bti.jpg"],
    "CAM_Calkini": ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/cc/15/55/palapa-al-final-del-sendero.jpg?w=700&h=500&s=1", "https://livitmexico.com/assets/img/estados/campeche/calkini.jpg", "https://livitmexico.com/assets/img/estados/campeche/isla-aguada.jpg", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/fc/9c/8a/iglesia.jpg?w=700&h=500&s=1"],
    "CAM_Campeche": ["https://a.travel-assets.com/findyours-php/viewfinder/images/res60/245000/245378-Campeche.jpg", "https://www.estrellasdelviaje.com/wp-content/uploads/2017/11/Campeche1-Copy-1600x900.jpg", "https://www.estrellasdelviaje.com/wp-content/uploads/2017/11/Campeche3-Copy-1600x900.jpg", "https://cdn.cnn.com/cnnnext/dam/assets/171013131154-09-beautiful-towns-mexico-full-169.jpg"],
    "CAM_Candelaria": ["https://www.candelaria.es/wp-content/uploads/banderas.jpg", "https://2.bp.blogspot.com/-Qn3kDufw-QU/XMCh502GjCI/AAAAAAAACGM/-GGoHc1ha3oUUnuTowxC5bTa0IbZ4wIEQCPcBGAYYCw/s1600/Faro%2Bde%2BPunta%2BCandelaria%2BI.jpg", "https://efectodonacion.com/wp-content/uploads/2021/04/TF-CANDELARIA-AYUNTAMIENTO-00.jpg", "https://2.bp.blogspot.com/-7E-ckYt6TJY/Vi4a69SCSLI/AAAAAAAAGVE/o5czxW40qVM/s1600/IMG-20151023-WA0004.jpg"],
    "CAM_Palizada": ["https://1.bp.blogspot.com/-tJ0ClfP3yag/WsK3Yr_Ub4I/AAAAAAAAaRY/REnWu6w1gRchUsUofRhlEIelihSK7-HtwCLcBGAs/s1600/PALIZADA_VIAJA_BONITO_3.jpg", "https://4.bp.blogspot.com/-ZPtoYv6LoX0/UaZ-hhyhEpI/AAAAAAAABp4/8D8-3FGuF6Y/s1600/CALZADA_DE_LOS_FRAILES_VIAJA_BONITO.JPG", "http://1.bp.blogspot.com/-mW9pVh4hmvo/VEL1Mx_AoZI/AAAAAAAAADs/u2dtO2UgSes/s1600/PhotoImage_back_campeche_3_CAMPECHE03.jpg", "https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/12/1_Portada_haciendas_JC.jpg"],
    "COA_Abasolo": ["https://photos.tpn.to/oh/nn/re/nh/1600x900.jpg", "https://static01.nyt.com/images/2020/05/13/dining/11burner-corn/merlin_172204347_fe934946-492d-4915-b7b3-3b24ab8fc09a-videoSixteenByNineJumbo1600.jpg", "https://cdn.cnn.com/cnnnext/dam/assets/190405120622-michoacan-turismo-gobierno-silvano-aureoles-tianguis-turistico-00000802-full-169.jpg", "https://abasologuanajuato.files.wordpress.com/2012/01/dsc00376.jpg"],
    "COA_Acuna": ["https://www.somosindustria.com/media/img/socials/1600px_parque_industrial_Chuy_Maria_Coahuila_06-19.jpg", "https://api.rcgmedia.mx/uploads/Whats_App_Image_2022_09_21_at_2_12_29_PM_1_413da26d55.jpeg", "https://pbs.twimg.com/media/E2cBDmfVkAkn4f4?format=jpg&name=large", "https://cnnespanol.cnn.com/wp-content/uploads/2021/09/210922153134-puente-del-rio-texas-bridge-ciudad-acuna-coahuila-full-169-1.jpg?quality=100&strip=info"],
    "COA_Allende": ["https://periodicoviaje.com/wp-content/uploads/2019/07/DSC00804-scaled.jpg", "https://static.nationalgeographicla.com/files/styles/image_3200/public/allende-mexico-3.jpg?w=1600&h=900", "https://escapadas.mexicodesconocido.com.mx/wp-content/uploads/2020/10/hotel-los-arcos-talpa-de-allende-jalisco.jpg", "https://www.atencionsma.com/wp-content/uploads/2021/11/Tortas-jugos-y-licuados-el-gordo.jpg"],
    "COA_Arteaga": ["https://d3te2s0dmhk13a.cloudfront.net/36616/-1809061122.jpeg", "https://puntoxpunto.mx/wp-content/uploads/2022/10/IMG-20221013-WA0044.jpg", "https://pbs.twimg.com/media/FTem-3AUAAEXMmo?format=jpg&name=large","https://pbs.twimg.com/media/C-I4H-mV0AAZ-xY.jpg:large"],
    "COA_Candela": ["https://pbs.twimg.com/media/FVZsM6sWQAIcwvU?format=jpg&name=large", "https://reservamosmx.files.wordpress.com/2015/10/coscomatepec.jpg", "https://s1.wklcdn.com/image_258/7740473/82529963/53400982Master.jpg", "https://descubreenmexico.com/wp-content/uploads/2022/08/Playa-Miramar.jpg"],
    "COL_Armeria": ["https://4.bp.blogspot.com/-0YYBLFODgFc/V1iv77uOvZI/AAAAAAABSp8/ZPRvp1-aikc0dL_BAAudUOMoqRU84zo4ACK4B/s1600/Cam%2BArmeria%2B%25281%2529.jpg", "https://elcomentario.ucol.mx/wp-content/uploads/2022/11/LOCAL-1-9.jpg", "https://img10.naventcdn.com/avisos/18/00/64/57/18/96/720x532/324598936.jpg", "https://production-neximo.s3.amazonaws.com/users/3448/properties/147518/eb1ee356f53e.jpeg"],
    "COL_Colima": ["https://cnnespanol.cnn.com/wp-content/uploads/2020/03/200325171517-colima-turismo-promocin-naturaleza-cultura-viajes-estilo-mercado-mexico-full-169.jpg?quality=100&strip=info", "https://visitmexico.com/wp-content/uploads/2022/09/Colima_Portada.png", "https://fundacionjcangelcraftacparalaeducacion.files.wordpress.com/2018/09/ocelote-leopardus-pardalis.jpg", "https://www.elsiglocoahuila.mx/coahuila/m/i/2019/02/877621.jpeg"],
    "COL_Comala": ["https://2.bp.blogspot.com/-9OIOv5Hzie0/XIFF0jXJEEI/AAAAAAABWKA/RYF0r2draiYB97-8Yosg_WazBbyHDNxggCLcBGAs/s1600/museo_interactivo_sitio_remate_comala.jpg", "https://3.bp.blogspot.com/-zCAdFQ1dIVg/WxVcbnPIm1I/AAAAAAAAPOY/QsD8lYaFZdcN1UwghZevcXq8h7InuEZ8QCPcBGAYYCw/s1600/1.jpg", "https://lugares.inah.gob.mx/images/zonas/portadas/_thumb1/252_A_000.jpg", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/89/c3/db/primer-cascada.jpg?w=1600&h=900&s=1/"],
    "COL_Coquimatlan": ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/66/f4/ca/jardin-de-la-villa-al.jpg?w=700&h=500&s=1", "https://i0.wp.com/www.colimanoticias.com/wp-content/uploads/2021/08/centro-covid-colima.jpeg?fit=700%2C500&ssl=1?v=1629570566", "http://2.bp.blogspot.com/-ilFsp4n06hA/U9PcKVhYgFI/AAAAAAAAGXo/fLDbaAsr_ro/s1600/p06+coquimatlan+2.jpg", "https://cdn-3.expansion.mx/dims4/default/718dfb4/2147483647/strip/true/crop/624x351+0+0/resize/1600x900!/format/webp/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2Fmedia%2F2013%2F09%2F18%2Fcarretera-coquimatlan-pueblo-juarez.jpg"],
    "COL_Cuauhtemoc": ["https://pbs.twimg.com/media/E5swPoHWEAEvJ8u.jpg:large", "https://depoliticayalgomas.es/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-12-at-10.57.05.jpeg", "https://s1.wklcdn.com/image_40/1228140/15155787/9425086Master.jpg", "https://yucatan.quadratin.com.mx/www/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-10-at-12.08.17-PM-edited.jpeg"],
    "CHP_Acacoyagua": ["https://nau.mx/wp-content/uploads/2021/12/IMG-20211209-WA0033.jpg", "https://i0.wp.com/nvinoticiaschiapas.com/wp-content/uploads/2022/04/1-OCTAGENARIO1.jpg?fit=1600%2C900&ssl=1", "https://nau.mx/wp-content/uploads/2021/06/IMG-20210629-WA0067.jpg", "https://nau.mx/wp-content/uploads/2022/05/18_IMG-20220504-WA0059_watermark_mie._04052022_200533.jpg"],
    "CHP_Acala": ["https://images.ecestaticos.com/LdlXeFLvQ7ybRODqnhRLvPS9zTM=/0x212:2269x1489/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F69c%2Fd67%2Fc39%2F69cd67c391c9ac53e1863b6ee018f8c4.jpg", "https://www.forotuxpan.com/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-19-at-2.48.11-PM.jpeg", "https://www.tn8.tv/wp-content/uploads/2021/11/3-134.jpg", "https://cdn.forbes.com.mx/2013/09/CASONA-DEL-TUMIN-B.jpg"],
    "CHP_Acapetahua": ["https://nau.mx/wp-content/uploads/2021/06/IMG-20210629-WA0066.jpg", "https://nau.mx/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-14-at-9.45.59-AM-2.jpeg", "https://production-neximo.s3.amazonaws.com/users/4210/properties/81575/images/91e90e7d-d479-40b8-a313-13a44a074311.jpg", "https://s3-us-west-1.amazonaws.com/tipsparatuviaje/wp-content/uploads/2017/09/5.-Queso-de-Ocosingo-relleno.jpg"],
    "CHP_Aldama": ["https://www.chiapasparalelo.com/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-04-at-20.06.52-3.jpeg", "https://recordchiapas.mx/wp-content/uploads/2021/08/Choque-Aldama-Tonal%C3%A1-1.jpg", "https://www.las2orillas.co/wp-content/uploads/2020/02/ind%C3%ACgenas.jpg", "https://exploracafe.weebly.com/uploads/8/0/9/6/80962076/items-63941-27181-20131112205834-b_orig.jpg"],
    "CHP_Altamirano": ["https://pbs.twimg.com/media/FRIVy0iXsAAvScJ?format=jpg&name=large", "https://cnnespanol.cnn.com/wp-content/uploads/2021/01/210111183344-reapertura-escuelas-clases-presenciales-covid-19-chiapas-pkg-krupskaia-alis-perspectivas-mexico-00022422-full-169.png", "https://pbs.twimg.com/media/FRIVy0iXIAEhvPz?format=jpg&name=large", "http://lh3.ggpht.com/--lqyYRFrspc/U0YGO70BLSI/AAAAAAAAASY/GCve5ZYtwZg/s1600/IMG_20140409_091505_749.jpg"],
    "CHI_Ahumada": [],
    "CHI_Aldama": [],
    "CHI_Allende": [],
    "CHI_Aquiles_Serdan": [],
    "CHI_Ascension": [],
    "DIF_Alvaro_Obregon": [],
    "DIF_Azcapotzalco": [],
    "DIF_Benito_Juarez": [],
    "DIF_Coyoacan": [],
    "DIF_Cuajimalpa_de_Morelos": [],
    "DUR_Canatlan": [],
    "DUR_Canelas": [],
    "DUR_Coneto_de_Comonfort": [],
    "DUR_Cuencame": [],
    "DUR_Durango": [],
    "GTO_Abasolo": [],
    "GTO_Acambaro": [],
    "GTO_Apaseo_el_Alto": [],
    "GTO_Apaseo_el_Grande": [],
    "GTO_Atarjea": [],
    "GRO_Acapulco_de_Juarez": [],
    "GRO_Acatepec": [],
    "GRO_Ahuacuotzingo": [],
    "GRO_Ajuchitlan_del_Progreso": [],
    "GRO_Alcozauca_de_Guerrero": [],
    "HGO_Acatlan": [],
    "HGO_Acaxochitlan": [],
    "HGO_Actopan": [],
    "HGO_Agua_Blanca_de_Iturbide": [],
    "HGO_Ajacuba": [],
    "JAL_Acatic": [],
    "JAL_Acatlan_de_Juarez": [],
    "JAL_Ahualulco_de_Mercado": [],
    "JAL_Amacueca": [],
    "JAL_Amatitan": [],
    "OMX_Acambay_de_Ruiz_Castaneda": [],
    "OMX_Acolman": [],
    "OMX_Aculco": [],
    "OMX_Almoloya_de_Alquisiras": [],
    "OMX_Almoloya_de_Juarez": [],
    "MIC_Acuitzio": [],
    "MIC_Aguililla": [],
    "MIC_Alvaro_Obregon": [],
    "MIC_Angamacutiro": [],
    "MIC_Angangueo": [],
    "MOR_Amacuzac": [],
    "MOR_Atlatlahucan": [],
    "MOR_Axochiapan": [],
    "MOR_Ayala": [],
    "MOR_Coatlan_del_Rio": [],
    "NAY_Acaponeta": [],
    "NAY_Ahuacatlan": [],
    "NAY_Amatlan_de_Canas": [],
    "NAY_Bahia_de_Banderas": [],
    "NAY_Compostela": [],
    "NLE_Abasolo": [],
    "NLE_Agualeguas": [],
    "NLE_Allende": [],
    "NLE_Anahuac": [],
    "NLE_Apodaca": [],
    "OAX_Abejones": [],
    "OAX_Acatlan_de_Perez_Figueroa": [],
    "OAX_Animas_Trujano": [],
    "OAX_Asuncion_Cacalotepec": [],
    "OAX_Asuncion_Cuyotepeji": [],
    "PUE_Acajete": [],
    "PUE_Acateno": [],
    "PUE_Acatlan": [],
    "PUE_Acatzingo": [],
    "PUE_Acteopan": [],
    "QRO_Amealco_de_Bonfil": [],
    "QRO_Arroyo_Seco": [],
    "QRO_Cadereyta_de_Montes": [],
    "QRO_Colon": [],
    "QRO_Corregidora": [],
    "ROO_Bacalar": [],
    "ROO_Benito_Juarez": [],
    "ROO_Cozumel": [],
    "ROO_Felipe_Carrillo_Puerto": [],
    "ROO_Isla_Mujeres": [],
    "SLP_Ahualulco": [],
    "SLP_Alaquines": [],
    "SLP_Aquismon": [],
    "SLP_Armadillo_de_los_Infante": [],
    "SLP_Axtla_de_Terrazas": [],
    "SIN_Ahome": [],
    "SIN_Angostura": [],
    "SIN_Badiraguato": [],
    "SIN_Choix": [],
    "SIN_Concordia": [],
    "SON_Aconchi": [],
    "SON_Agua_Prieta": [],
    "SON_Alamos": [],
    "SON_Altar": [],
    "SON_Arivechi": [],
    "TAB_Balancan": [],
    "TAB_Cardenas": [],
    "TAB_Centla": [],
    "TAB_Centro": [],
    "TAB_Comalcalco": [],
    "TAM_Victoria": [],
    "TAM_Aldama": [],
    "TAM_Altamira": [],
    "TAM_Antiguo_Morelos": [],
    "TAM_Burgos": [],
    "TLX_Acuamanala_de_Miguel_Hidalgo": [],
    "TLX_Amaxac_de_Guerrero": [],
    "TLX_Apetatitlan_de_Antonio_Carvajal": [],
    "TLX_Apizaco": [],
    "TLX_Atlangatepec": [],
    "VER_Acajete": [],
    "VER_Acatlan": [],
    "VER_Acayucan": [],
    "VER_Actopan": [],
    "VER_Acula": [],
    "YUC_Abala": [],
    "YUC_Acanceh": [],
    "YUC_Akil": [],
    "YUC_Baca": [],
    "YUC_Bokoba": [],
    "ZAC_Apozol": [],
    "ZAC_Apulco": [],
    "ZAC_Atolinga": [],
    "ZAC_Benito_Juarez": [],
    "ZAC_Calera": [],
}
