var wms_layers = [];

var format_Lagos_0 = new ol.format.GeoJSON();
var features_Lagos_0 = format_Lagos_0.readFeatures(json_Lagos_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lagos_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lagos_0.addFeatures(features_Lagos_0);
var lyr_Lagos_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lagos_0, 
                style: style_Lagos_0,
                interactive: true,
                title: '<img src="styles/legend/Lagos_0.png" /> Lagos'
            });
var format_Canales_1 = new ol.format.GeoJSON();
var features_Canales_1 = format_Canales_1.readFeatures(json_Canales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Canales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Canales_1.addFeatures(features_Canales_1);
var lyr_Canales_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Canales_1, 
                style: style_Canales_1,
                interactive: true,
                title: '<img src="styles/legend/Canales_1.png" /> Canales'
            });
var format_Rios_2 = new ol.format.GeoJSON();
var features_Rios_2 = format_Rios_2.readFeatures(json_Rios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_2.addFeatures(features_Rios_2);
var lyr_Rios_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rios_2, 
                style: style_Rios_2,
                interactive: true,
                title: '<img src="styles/legend/Rios_2.png" /> Rios'
            });
var format_RedVialprincipal_3 = new ol.format.GeoJSON();
var features_RedVialprincipal_3 = format_RedVialprincipal_3.readFeatures(json_RedVialprincipal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedVialprincipal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedVialprincipal_3.addFeatures(features_RedVialprincipal_3);
var lyr_RedVialprincipal_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RedVialprincipal_3, 
                style: style_RedVialprincipal_3,
                interactive: true,
    title: 'Red Vial principal<br />\
    <img src="styles/legend/RedVialprincipal_3_0.png" /> Estabilizado<br />\
    <img src="styles/legend/RedVialprincipal_3_1.png" /> Huella<br />\
    <img src="styles/legend/RedVialprincipal_3_2.png" /> Pavimento<br />\
    <img src="styles/legend/RedVialprincipal_3_3.png" /> Ripio<br />\
    <img src="styles/legend/RedVialprincipal_3_4.png" /> s/información<br />\
    <img src="styles/legend/RedVialprincipal_3_5.png" /> Tierra<br />'
        });
var format_RedFerroviaria_4 = new ol.format.GeoJSON();
var features_RedFerroviaria_4 = format_RedFerroviaria_4.readFeatures(json_RedFerroviaria_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedFerroviaria_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedFerroviaria_4.addFeatures(features_RedFerroviaria_4);
var lyr_RedFerroviaria_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RedFerroviaria_4, 
                style: style_RedFerroviaria_4,
                interactive: true,
    title: 'Red Ferroviaria<br />\
    <img src="styles/legend/RedFerroviaria_4_0.png" /> Inactiva<br />\
    <img src="styles/legend/RedFerroviaria_4_1.png" /> Activa<br />'
        });
var format_Aeropuertos_5 = new ol.format.GeoJSON();
var features_Aeropuertos_5 = format_Aeropuertos_5.readFeatures(json_Aeropuertos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aeropuertos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aeropuertos_5.addFeatures(features_Aeropuertos_5);
var lyr_Aeropuertos_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aeropuertos_5, 
                style: style_Aeropuertos_5,
                interactive: true,
                title: '<img src="styles/legend/Aeropuertos_5.png" /> Aeropuertos'
            });

        var lyr_OSMStandard_6 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Comunashabkm2_7 = new ol.format.GeoJSON();
var features_Comunashabkm2_7 = format_Comunashabkm2_7.readFeatures(json_Comunashabkm2_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comunashabkm2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comunashabkm2_7.addFeatures(features_Comunashabkm2_7);
var lyr_Comunashabkm2_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comunashabkm2_7, 
                style: style_Comunashabkm2_7,
                interactive: true,
    title: 'Comunas (hab./km2)<br />\
    <img src="styles/legend/Comunashabkm2_7_0.png" /> 0 - 1765 <br />\
    <img src="styles/legend/Comunashabkm2_7_1.png" /> 1765 - 5634<br />\
    <img src="styles/legend/Comunashabkm2_7_2.png" /> 5634 - 15341<br />\
    <img src="styles/legend/Comunashabkm2_7_3.png" /> 15341 - 30615<br />'
        });
var format_Capital_8 = new ol.format.GeoJSON();
var features_Capital_8 = format_Capital_8.readFeatures(json_Capital_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capital_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capital_8.addFeatures(features_Capital_8);
var lyr_Capital_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capital_8, 
                style: style_Capital_8,
                interactive: true,
                title: '<img src="styles/legend/Capital_8.png" /> Capital'
            });
var group_ViasdeComunicacin = new ol.layer.Group({
                                layers: [lyr_RedVialprincipal_3,lyr_RedFerroviaria_4,lyr_Aeropuertos_5,],
                                title: "Vias de Comunicación "});
var group_RecursosHdricos = new ol.layer.Group({
                                layers: [lyr_Lagos_0,lyr_Canales_1,lyr_Rios_2,],
                                title: "Recursos Hídricos"});

lyr_Lagos_0.setVisible(false);lyr_Canales_1.setVisible(false);lyr_Rios_2.setVisible(false);lyr_RedVialprincipal_3.setVisible(false);lyr_RedFerroviaria_4.setVisible(false);lyr_Aeropuertos_5.setVisible(false);lyr_OSMStandard_6.setVisible(false);lyr_Comunashabkm2_7.setVisible(true);lyr_Capital_8.setVisible(true);
var layersList = [lyr_OSMStandard_6,lyr_Comunashabkm2_7, group_RecursosHdricos,group_ViasdeComunicacin,lyr_Capital_8];
lyr_Lagos_0.set('fieldAliases', {'NUM': 'NUM', 'AREA_KM2': 'AREA_KM2', 'NOMBRE': 'Nombre', 'TIPO': 'Tipo', 'REGION': 'Región', 'PROVINCIA': 'Provincia', 'COMUNA': 'Comuna', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'CLASIFICAC': 'Clasificación', 'USO': 'Uso', 'ID': 'ID', 'Sup_km2': 'Superficie (km2)', });
lyr_Canales_1.set('fieldAliases', {'gid': 'ID', 'id': 'id', 'codcan': 'codcan', 'nomcan': 'Nombre', 'origen': 'Origen', 'fuentehid': 'Fuente hídrica', 'tipo_canal': 'Tipo', 'f_orign_fh': 'f_orign_fh', 'f_oua': 'f_oua', });
lyr_Rios_2.set('fieldAliases', {'objectid': 'ID', 'fid_drenes': 'fid_drenes', 'cod_comuna': 'cod_comuna', 'Nombre': 'Nombre', 'Dren_Tipo': 'Tipo', 'Region': 'Region', 'Provincia': 'Provincia', 'Comuna': 'Comuna', });
lyr_RedVialprincipal_3.set('fieldAliases', {'ROL': 'ID', 'ROL_LABEL': 'ROL_LABEL', 'CýDIGO': 'CýDIGO', 'NOMBRE': 'Nombre', 'CARPETA': 'Tipo', 'Shape_Leng': 'Shape_Leng', });
lyr_RedFerroviaria_4.set('fieldAliases', {'Obejto': 'Tipo', 'Activ_2016': 'Actividad', 'Largo_Km': 'Largo (km)', 'st_length_': 'st_length_', 'Ramal': 'Ramal', });
lyr_Aeropuertos_5.set('fieldAliases', {'objectid_1': 'ID', 'cod_comuna': 'cod_comuna', 'categoría': 'Categoría', 'cod_oaci': 'cod_oaci', 'cod_iata': 'cod_iata', 'Aerodromo': 'Nombre', 'Region': 'Región', 'Provincia': 'Provincia', 'Comuna': 'Comuna', });
lyr_Comunashabkm2_7.set('fieldAliases', {'ID_2002': 'ID', 'NOMBRE': 'Nombre', 'KM2': 'KM2', 'HAB_KM2': 'HAB_KM2', 'POBTOT': 'Población', 'Sup_km2': 'Superficie (km2)', 'Hab_km2_1': 'Densidad (Hab/km2)', });
lyr_Capital_8.set('fieldAliases', {'nombre': 'Nombre', 'poblacion': 'Población', 'idioma': 'Idioma', 'moneda': 'Moneda', 'fundacion': 'Año Fundación', });
lyr_Lagos_0.set('fieldImages', {'NUM': 'Hidden', 'AREA_KM2': 'Hidden', 'NOMBRE': 'TextEdit', 'TIPO': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'LATITUD': 'Hidden', 'LONGITUD': 'Hidden', 'CLASIFICAC': 'TextEdit', 'USO': 'TextEdit', 'ID': 'Range', 'Sup_km2': 'TextEdit', });
lyr_Canales_1.set('fieldImages', {'gid': 'TextEdit', 'id': 'Hidden', 'codcan': 'Hidden', 'nomcan': 'TextEdit', 'origen': 'TextEdit', 'fuentehid': 'TextEdit', 'tipo_canal': 'TextEdit', 'f_orign_fh': 'Hidden', 'f_oua': 'Hidden', });
lyr_Rios_2.set('fieldImages', {'objectid': 'TextEdit', 'fid_drenes': 'Hidden', 'cod_comuna': 'Hidden', 'Nombre': 'TextEdit', 'Dren_Tipo': 'TextEdit', 'Region': 'TextEdit', 'Provincia': 'TextEdit', 'Comuna': 'TextEdit', });
lyr_RedVialprincipal_3.set('fieldImages', {'ROL': 'TextEdit', 'ROL_LABEL': 'Hidden', 'CýDIGO': 'Hidden', 'NOMBRE': 'TextEdit', 'CARPETA': 'TextEdit', 'Shape_Leng': 'Hidden', });
lyr_RedFerroviaria_4.set('fieldImages', {'Obejto': 'TextEdit', 'Activ_2016': 'TextEdit', 'Largo_Km': 'TextEdit', 'st_length_': 'Hidden', 'Ramal': 'TextEdit', });
lyr_Aeropuertos_5.set('fieldImages', {'objectid_1': 'TextEdit', 'cod_comuna': 'Hidden', 'categoría': 'TextEdit', 'cod_oaci': 'Hidden', 'cod_iata': 'Hidden', 'Aerodromo': 'TextEdit', 'Region': 'TextEdit', 'Provincia': 'TextEdit', 'Comuna': 'TextEdit', });
lyr_Comunashabkm2_7.set('fieldImages', {'ID_2002': 'TextEdit', 'NOMBRE': 'TextEdit', 'KM2': 'Hidden', 'HAB_KM2': 'Hidden', 'POBTOT': 'TextEdit', 'Sup_km2': 'TextEdit', 'Hab_km2_1': 'TextEdit', });
lyr_Capital_8.set('fieldImages', {'nombre': 'TextEdit', 'poblacion': 'TextEdit', 'idioma': 'TextEdit', 'moneda': 'TextEdit', 'fundacion': 'TextEdit', });
lyr_Lagos_0.set('fieldLabels', {});
lyr_Canales_1.set('fieldLabels', {});
lyr_Rios_2.set('fieldLabels', {});
lyr_RedVialprincipal_3.set('fieldLabels', {});
lyr_RedFerroviaria_4.set('fieldLabels', {});
lyr_Aeropuertos_5.set('fieldLabels', {});
lyr_Comunashabkm2_7.set('fieldLabels', {'ID_2002': 'inline label', 'NOMBRE': 'inline label', 'POBTOT': 'inline label', 'Sup_km2': 'inline label', 'Hab_km2_1': 'inline label', });
lyr_Capital_8.set('fieldLabels', {'nombre': 'inline label', 'poblacion': 'inline label', 'idioma': 'inline label', 'moneda': 'inline label', 'fundacion': 'inline label', });
lyr_Capital_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});