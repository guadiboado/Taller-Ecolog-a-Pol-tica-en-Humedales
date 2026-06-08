ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-58.755471, -34.512418, -58.431772, -34.205057]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_2025112500_00_2025112523_59_DEM_COPERNICUS_30_DEM_Raw_1 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025-11-25-00_00_2025-11-25-23_59_DEM_COPERNICUS_30_DEM_(Raw)<br />\
    <img src="styles/legend/2025112500_00_2025112523_59_DEM_COPERNICUS_30_DEM_Raw_1_0.png" /> 0<br />\
    <img src="styles/legend/2025112500_00_2025112523_59_DEM_COPERNICUS_30_DEM_Raw_1_1.png" /> 65535<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2025112500_00_2025112523_59_DEM_COPERNICUS_30_DEM_Raw_1.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [-59.062500, -34.481656, -58.352509, -34.145908]
        })
    });
var format_delta_tigre_2 = new ol.format.GeoJSON();
var features_delta_tigre_2 = format_delta_tigre_2.readFeatures(json_delta_tigre_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_delta_tigre_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_delta_tigre_2.addFeatures(features_delta_tigre_2);
var lyr_delta_tigre_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_delta_tigre_2, 
                style: style_delta_tigre_2,
                popuplayertitle: 'delta_tigre',
                interactive: true,
                title: '<img src="styles/legend/delta_tigre_2.png" /> delta_tigre'
            });
var format_delta_tigre_3 = new ol.format.GeoJSON();
var features_delta_tigre_3 = format_delta_tigre_3.readFeatures(json_delta_tigre_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_delta_tigre_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_delta_tigre_3.addFeatures(features_delta_tigre_3);
var lyr_delta_tigre_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_delta_tigre_3, 
                style: style_delta_tigre_3,
                popuplayertitle: 'delta_tigre',
                interactive: false,
                title: '<img src="styles/legend/delta_tigre_3.png" /> delta_tigre'
            });
var format_rios_OSM_4 = new ol.format.GeoJSON();
var features_rios_OSM_4 = format_rios_OSM_4.readFeatures(json_rios_OSM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_rios_OSM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rios_OSM_4.addFeatures(features_rios_OSM_4);
var lyr_rios_OSM_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rios_OSM_4, 
                style: style_rios_OSM_4,
                popuplayertitle: 'rios_OSM',
                interactive: true,
                title: '<img src="styles/legend/rios_OSM_4.png" /> rios_OSM'
            });
var format_limites_5 = new ol.format.GeoJSON();
var features_limites_5 = format_limites_5.readFeatures(json_limites_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_limites_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limites_5.addFeatures(features_limites_5);
var lyr_limites_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limites_5, 
                style: style_limites_5,
                popuplayertitle: 'limites',
                interactive: true,
                title: '<img src="styles/legend/limites_5.png" /> limites'
            });
var format_ItekoaProblemticaCelofn_6 = new ol.format.GeoJSON();
var features_ItekoaProblemticaCelofn_6 = format_ItekoaProblemticaCelofn_6.readFeatures(json_ItekoaProblemticaCelofn_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ItekoaProblemticaCelofn_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ItekoaProblemticaCelofn_6.addFeatures(features_ItekoaProblemticaCelofn_6);
var lyr_ItekoaProblemticaCelofn_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ItekoaProblemticaCelofn_6, 
                style: style_ItekoaProblemticaCelofn_6,
                popuplayertitle: 'Itekoa Problemática Celofán',
                interactive: true,
                title: '<img src="styles/legend/ItekoaProblemticaCelofn_6.png" /> Itekoa Problemática Celofán'
            });
var format_ConflictosItekoa_7 = new ol.format.GeoJSON();
var features_ConflictosItekoa_7 = format_ConflictosItekoa_7.readFeatures(json_ConflictosItekoa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ConflictosItekoa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConflictosItekoa_7.addFeatures(features_ConflictosItekoa_7);
var lyr_ConflictosItekoa_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConflictosItekoa_7, 
                style: style_ConflictosItekoa_7,
                popuplayertitle: 'Conflictos Itekoa',
                interactive: true,
    title: 'Conflictos Itekoa<br />\
    <img src="styles/legend/ConflictosItekoa_7_0.png" /> Conflictos  por la tierra y/o barrios privados<br />\
    <img src="styles/legend/ConflictosItekoa_7_1.png" /> Conflictos por el agua<br />' });
var format_Problemticas_Itekoa_8 = new ol.format.GeoJSON();
var features_Problemticas_Itekoa_8 = format_Problemticas_Itekoa_8.readFeatures(json_Problemticas_Itekoa_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Problemticas_Itekoa_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Problemticas_Itekoa_8.addFeatures(features_Problemticas_Itekoa_8);
var lyr_Problemticas_Itekoa_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Problemticas_Itekoa_8, 
                style: style_Problemticas_Itekoa_8,
                popuplayertitle: 'Problemáticas _ Itekoa',
                interactive: true,
    title: 'Problemáticas _ Itekoa<br />\
    <img src="styles/legend/Problemticas_Itekoa_8_0.png" /> Incendios<br />\
    <img src="styles/legend/Problemticas_Itekoa_8_1.png" /> Navegación riesgosa<br />\
    <img src="styles/legend/Problemticas_Itekoa_8_2.png" /> Residuos 1<br />\
    <img src="styles/legend/Problemticas_Itekoa_8_3.png" /> Residuos 2<br />\
    <img src="styles/legend/Problemticas_Itekoa_8_4.png" /> Residuos 3<br />\
    <img src="styles/legend/Problemticas_Itekoa_8_5.png" /> Suministro Eléctrico<br />\
    <img src="styles/legend/Problemticas_Itekoa_8_6.png" /> Transporte<br />' });
var format_Entramados_Itekoa_9 = new ol.format.GeoJSON();
var features_Entramados_Itekoa_9 = format_Entramados_Itekoa_9.readFeatures(json_Entramados_Itekoa_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Entramados_Itekoa_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Entramados_Itekoa_9.addFeatures(features_Entramados_Itekoa_9);
var lyr_Entramados_Itekoa_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Entramados_Itekoa_9, 
                style: style_Entramados_Itekoa_9,
                popuplayertitle: 'Entramados_Itekoa',
                interactive: true,
                title: '<img src="styles/legend/Entramados_Itekoa_9.png" /> Entramados_Itekoa'
            });
var format_Conflictos_FI_10 = new ol.format.GeoJSON();
var features_Conflictos_FI_10 = format_Conflictos_FI_10.readFeatures(json_Conflictos_FI_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Conflictos_FI_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Conflictos_FI_10.addFeatures(features_Conflictos_FI_10);
var lyr_Conflictos_FI_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Conflictos_FI_10, 
                style: style_Conflictos_FI_10,
                popuplayertitle: 'Conflictos_FI',
                interactive: true,
    title: 'Conflictos_FI<br />\
    <img src="styles/legend/Conflictos_FI_10_0.png" /> Conflictos  por la tierra y/o barrios privados<br />\
    <img src="styles/legend/Conflictos_FI_10_1.png" /> Conflictos por el agua<br />' });
var format_Problemticas_FI_11 = new ol.format.GeoJSON();
var features_Problemticas_FI_11 = format_Problemticas_FI_11.readFeatures(json_Problemticas_FI_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Problemticas_FI_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Problemticas_FI_11.addFeatures(features_Problemticas_FI_11);
var lyr_Problemticas_FI_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Problemticas_FI_11, 
                style: style_Problemticas_FI_11,
                popuplayertitle: 'Problemáticas_FI',
                interactive: true,
    title: 'Problemáticas_FI<br />\
    <img src="styles/legend/Problemticas_FI_11_0.png" /> Incendios<br />\
    <img src="styles/legend/Problemticas_FI_11_1.png" /> Navegaci?n riesgosa<br />\
    <img src="styles/legend/Problemticas_FI_11_2.png" /> Residuos<br />' });
var format_Entramados_FI_12 = new ol.format.GeoJSON();
var features_Entramados_FI_12 = format_Entramados_FI_12.readFeatures(json_Entramados_FI_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Entramados_FI_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Entramados_FI_12.addFeatures(features_Entramados_FI_12);
var lyr_Entramados_FI_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Entramados_FI_12, 
                style: style_Entramados_FI_12,
                popuplayertitle: 'Entramados_FI',
                interactive: true,
                title: '<img src="styles/legend/Entramados_FI_12.png" /> Entramados_FI'
            });
var format_Conflictos_FuerzaI_13 = new ol.format.GeoJSON();
var features_Conflictos_FuerzaI_13 = format_Conflictos_FuerzaI_13.readFeatures(json_Conflictos_FuerzaI_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Conflictos_FuerzaI_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Conflictos_FuerzaI_13.addFeatures(features_Conflictos_FuerzaI_13);
var lyr_Conflictos_FuerzaI_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Conflictos_FuerzaI_13, 
                style: style_Conflictos_FuerzaI_13,
                popuplayertitle: 'Conflictos_FuerzaI',
                interactive: true,
    title: 'Conflictos_FuerzaI<br />\
    <img src="styles/legend/Conflictos_FuerzaI_13_0.png" /> Conflictos  por la tierra y/o barrios privados<br />' });
var format_Problemticas_FuerzaI_14 = new ol.format.GeoJSON();
var features_Problemticas_FuerzaI_14 = format_Problemticas_FuerzaI_14.readFeatures(json_Problemticas_FuerzaI_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Problemticas_FuerzaI_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Problemticas_FuerzaI_14.addFeatures(features_Problemticas_FuerzaI_14);
var lyr_Problemticas_FuerzaI_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Problemticas_FuerzaI_14, 
                style: style_Problemticas_FuerzaI_14,
                popuplayertitle: 'Problemáticas_FuerzaI',
                interactive: true,
    title: 'Problemáticas_FuerzaI<br />\
    <img src="styles/legend/Problemticas_FuerzaI_14_0.png" /> Incendios<br />\
    <img src="styles/legend/Problemticas_FuerzaI_14_1.png" /> Navegaci?n riesgosa<br />\
    <img src="styles/legend/Problemticas_FuerzaI_14_2.png" /> Perros agresivos<br />\
    <img src="styles/legend/Problemticas_FuerzaI_14_3.png" /> Residuos<br />\
    <img src="styles/legend/Problemticas_FuerzaI_14_4.png" /> Suministro El?ctrico<br />\
    <img src="styles/legend/Problemticas_FuerzaI_14_5.png" /> Transporte<br />' });
var format_Entramados_FuerzaI_15 = new ol.format.GeoJSON();
var features_Entramados_FuerzaI_15 = format_Entramados_FuerzaI_15.readFeatures(json_Entramados_FuerzaI_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Entramados_FuerzaI_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Entramados_FuerzaI_15.addFeatures(features_Entramados_FuerzaI_15);
var lyr_Entramados_FuerzaI_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Entramados_FuerzaI_15, 
                style: style_Entramados_FuerzaI_15,
                popuplayertitle: 'Entramados_FuerzaI',
                interactive: true,
                title: '<img src="styles/legend/Entramados_FuerzaI_15.png" /> Entramados_FuerzaI'
            });
var format_Problemticas_Pluri_16 = new ol.format.GeoJSON();
var features_Problemticas_Pluri_16 = format_Problemticas_Pluri_16.readFeatures(json_Problemticas_Pluri_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Problemticas_Pluri_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Problemticas_Pluri_16.addFeatures(features_Problemticas_Pluri_16);
var lyr_Problemticas_Pluri_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Problemticas_Pluri_16, 
                style: style_Problemticas_Pluri_16,
                popuplayertitle: 'Problemáticas_Pluri',
                interactive: true,
    title: 'Problemáticas_Pluri<br />\
    <img src="styles/legend/Problemticas_Pluri_16_0.png" /> Incendios<br />\
    <img src="styles/legend/Problemticas_Pluri_16_1.png" /> Navegación riesgosa<br />\
    <img src="styles/legend/Problemticas_Pluri_16_2.png" /> Perros agresivos<br />\
    <img src="styles/legend/Problemticas_Pluri_16_3.png" /> Residuos 1<br />\
    <img src="styles/legend/Problemticas_Pluri_16_4.png" /> Residuos 2<br />\
    <img src="styles/legend/Problemticas_Pluri_16_5.png" /> Residuos 4<br />' });
var group_Fuerza_islea = new ol.layer.Group({
                                layers: [lyr_Conflictos_FuerzaI_13,lyr_Problemticas_FuerzaI_14,lyr_Entramados_FuerzaI_15,],
                                fold: 'close',
                                title: 'Fuerza_isleña'});
var group_FestivalIsleo = new ol.layer.Group({
                                layers: [lyr_Conflictos_FI_10,lyr_Problemticas_FI_11,lyr_Entramados_FI_12,],
                                fold: 'close',
                                title: 'Festival Isleño'});
var group_Itekoa = new ol.layer.Group({
                                layers: [lyr_ItekoaProblemticaCelofn_6,lyr_ConflictosItekoa_7,lyr_Problemticas_Itekoa_8,lyr_Entramados_Itekoa_9,],
                                fold: 'open',
                                title: 'Itekoa'});

lyr_GoogleHybrid_0.setVisible(true);lyr_2025112500_00_2025112523_59_DEM_COPERNICUS_30_DEM_Raw_1.setVisible(true);lyr_delta_tigre_2.setVisible(true);lyr_delta_tigre_3.setVisible(true);lyr_rios_OSM_4.setVisible(true);lyr_limites_5.setVisible(true);lyr_ItekoaProblemticaCelofn_6.setVisible(true);lyr_ConflictosItekoa_7.setVisible(true);lyr_Problemticas_Itekoa_8.setVisible(true);lyr_Entramados_Itekoa_9.setVisible(true);lyr_Conflictos_FI_10.setVisible(true);lyr_Problemticas_FI_11.setVisible(true);lyr_Entramados_FI_12.setVisible(true);lyr_Conflictos_FuerzaI_13.setVisible(true);lyr_Problemticas_FuerzaI_14.setVisible(true);lyr_Entramados_FuerzaI_15.setVisible(true);lyr_Problemticas_Pluri_16.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_2025112500_00_2025112523_59_DEM_COPERNICUS_30_DEM_Raw_1,lyr_delta_tigre_2,lyr_delta_tigre_3,lyr_rios_OSM_4,lyr_limites_5,group_Itekoa,group_FestivalIsleo,group_Fuerza_islea,lyr_Problemticas_Pluri_16];
lyr_delta_tigre_2.set('fieldAliases', {'gid': 'gid', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', 'Descripci�': 'Descripci�', });
lyr_delta_tigre_3.set('fieldAliases', {'gid': 'gid', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', 'Descripci�': 'Descripci�', });
lyr_rios_OSM_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'waterway': 'waterway', 'ship': 'ship', 'tunnel': 'tunnel', 'layer': 'layer', 'admin_leve': 'admin_leve', 'boundary': 'boundary', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'name_en': 'name_en', 'alt_name': 'alt_name', 'width': 'width', 'intermitte': 'intermitte', 'old_name': 'old_name', 'tidal': 'tidal', 'motorboat': 'motorboat', 'canoe': 'canoe', 'name': 'name', 'boat': 'boat', });
lyr_limites_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entidad': 'Entidad', 'Objeto': 'Objeto', 'SAG': 'SAG', 'VLP': 'VLP', 'VLJ': 'VLJ', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'GlobalID': 'GlobalID', 'FDC': 'FDC', 'Escala': 'Escala', 'FNA': 'FNA', 'GNA': 'GNA', 'NAM': 'NAM', 'COI': 'COI', 'COU': 'COU', 'SHAPE_STLe': 'SHAPE_STLe', });
lyr_ItekoaProblemticaCelofn_6.set('fieldAliases', {'gid': 'gid', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', 'Descripci�': 'Descripci�', });
lyr_ConflictosItekoa_7.set('fieldAliases', {'fid': 'fid', 'Ubicaci0n_': 'Ubicaci0n_', 'Conflicto': 'Conflicto', 'DESCRIPCIO': 'DESCRIPCIO', 'latitud': 'latitud', 'longitud': 'longitud', });
lyr_Problemticas_Itekoa_8.set('fieldAliases', {'fid': 'fid', 'Ubicación': 'Ubicación', 'Problemát': 'Problemát', 'Descripci�': 'Descripci�', 'latitud': 'latitud', 'longitud': 'longitud', 'etiq resid': 'etiq resid', });
lyr_Entramados_Itekoa_9.set('fieldAliases', {'fid': 'fid', 'Ubicación': 'Ubicación', 'Categoría': 'Categoría', 'Nombre': 'Nombre', 'latitud': 'latitud', 'longitud': 'longitud', 'Descripci�': 'Descripci�', });
lyr_Conflictos_FI_10.set('fieldAliases', {'fid': 'fid', 'Ubicaci�n': 'Ubicaci�n', 'Categor�a': 'Categor�a', 'Descripci�n': 'Descripci�n', 'lat': 'lat', 'longitud': 'longitud', });
lyr_Problemticas_FI_11.set('fieldAliases', {'fid': 'fid', 'Ubicaci?n': 'Ubicaci?n', 'Categor?a': 'Categor?a', 'Descripci?': 'Descripci?', 'lat': 'lat', 'longitud': 'longitud', });
lyr_Entramados_FI_12.set('fieldAliases', {'fid': 'fid', 'Ubicaci?n': 'Ubicaci?n', 'Categor?a': 'Categor?a', 'Descripci?': 'Descripci?', 'lat': 'lat', 'longitud': 'longitud', });
lyr_Conflictos_FuerzaI_13.set('fieldAliases', {'fid': 'fid', 'Ubicaci?n': 'Ubicaci?n', 'Categor?a': 'Categor?a', 'Descripci?': 'Descripci?', 'latitud': 'latitud', 'longitud': 'longitud', });
lyr_Problemticas_FuerzaI_14.set('fieldAliases', {'fid': 'fid', 'Ubicaci?n': 'Ubicaci?n', 'Categor?a': 'Categor?a', 'Descripci?': 'Descripci?', 'latitud': 'latitud', 'longitud': 'longitud', });
lyr_Entramados_FuerzaI_15.set('fieldAliases', {'fid': 'fid', 'Ubicaci?n': 'Ubicaci?n', 'Categor?a': 'Categor?a', 'Descripci?': 'Descripci?', 'latitud': 'latitud', 'longitud': 'longitud', });
lyr_Problemticas_Pluri_16.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'Categoría': 'Categoría', 'Descripción': 'Descripción', 'latitud': 'latitud', 'longitud': 'longitud', 'etiqu': 'etiqu', });
lyr_delta_tigre_2.set('fieldImages', {'gid': '', 'objeto': '', 'fna': '', 'gna': '', 'nam': '', 'in1': '', 'fdc': '', 'sag': '', 'Descripci�': '', });
lyr_delta_tigre_3.set('fieldImages', {'gid': '', 'objeto': '', 'fna': '', 'gna': '', 'nam': '', 'in1': '', 'fdc': '', 'sag': '', 'Descripci�': '', });
lyr_rios_OSM_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'waterway': '', 'ship': '', 'tunnel': '', 'layer': '', 'admin_leve': '', 'boundary': '', 'wikipedia': '', 'wikidata': '', 'name_en': '', 'alt_name': '', 'width': '', 'intermitte': '', 'old_name': '', 'tidal': '', 'motorboat': '', 'canoe': '', 'name': '', 'boat': '', });
lyr_limites_5.set('fieldImages', {'OBJECTID': '', 'Entidad': '', 'Objeto': '', 'SAG': '', 'VLP': '', 'VLJ': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'last_edi_1': '', 'GlobalID': '', 'FDC': '', 'Escala': '', 'FNA': '', 'GNA': '', 'NAM': '', 'COI': '', 'COU': '', 'SHAPE_STLe': '', });
lyr_ItekoaProblemticaCelofn_6.set('fieldImages', {'gid': 'Range', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'in1': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', 'Descripci�': 'TextEdit', });
lyr_ConflictosItekoa_7.set('fieldImages', {'fid': 'TextEdit', 'Ubicaci0n_': 'TextEdit', 'Conflicto': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', });
lyr_Problemticas_Itekoa_8.set('fieldImages', {'fid': 'TextEdit', 'Ubicación': 'TextEdit', 'Problemát': 'TextEdit', 'Descripci�': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'etiq resid': 'TextEdit', });
lyr_Entramados_Itekoa_9.set('fieldImages', {'fid': 'TextEdit', 'Ubicación': 'TextEdit', 'Categoría': 'TextEdit', 'Nombre': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'Descripci�': 'TextEdit', });
lyr_Conflictos_FI_10.set('fieldImages', {'fid': '', 'Ubicaci�n': '', 'Categor�a': '', 'Descripci�n': '', 'lat': '', 'longitud': '', });
lyr_Problemticas_FI_11.set('fieldImages', {'fid': '', 'Ubicaci?n': '', 'Categor?a': '', 'Descripci?': '', 'lat': '', 'longitud': '', });
lyr_Entramados_FI_12.set('fieldImages', {'fid': '', 'Ubicaci?n': '', 'Categor?a': '', 'Descripci?': '', 'lat': '', 'longitud': '', });
lyr_Conflictos_FuerzaI_13.set('fieldImages', {'fid': '', 'Ubicaci?n': '', 'Categor?a': '', 'Descripci?': '', 'latitud': '', 'longitud': '', });
lyr_Problemticas_FuerzaI_14.set('fieldImages', {'fid': '', 'Ubicaci?n': '', 'Categor?a': '', 'Descripci?': '', 'latitud': '', 'longitud': '', });
lyr_Entramados_FuerzaI_15.set('fieldImages', {'fid': '', 'Ubicaci?n': '', 'Categor?a': '', 'Descripci?': '', 'latitud': '', 'longitud': '', });
lyr_Problemticas_Pluri_16.set('fieldImages', {'fid': '', 'field_1': '', 'Categoría': '', 'Descripción': '', 'latitud': '', 'longitud': '', 'etiqu': '', });
lyr_delta_tigre_2.set('fieldLabels', {'gid': 'no label', 'objeto': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'no label', 'in1': 'no label', 'fdc': 'no label', 'sag': 'no label', 'Descripci�': 'no label', });
lyr_delta_tigre_3.set('fieldLabels', {'gid': 'no label', 'objeto': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'no label', 'in1': 'no label', 'fdc': 'no label', 'sag': 'no label', 'Descripci�': 'no label', });
lyr_rios_OSM_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'waterway': 'no label', 'ship': 'no label', 'tunnel': 'no label', 'layer': 'no label', 'admin_leve': 'no label', 'boundary': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'name_en': 'no label', 'alt_name': 'no label', 'width': 'no label', 'intermitte': 'no label', 'old_name': 'no label', 'tidal': 'no label', 'motorboat': 'no label', 'canoe': 'no label', 'name': 'no label', 'boat': 'no label', });
lyr_limites_5.set('fieldLabels', {'OBJECTID': 'no label', 'Entidad': 'no label', 'Objeto': 'no label', 'SAG': 'no label', 'VLP': 'no label', 'VLJ': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'GlobalID': 'no label', 'FDC': 'no label', 'Escala': 'no label', 'FNA': 'no label', 'GNA': 'no label', 'NAM': 'no label', 'COI': 'no label', 'COU': 'no label', 'SHAPE_STLe': 'no label', });
lyr_ItekoaProblemticaCelofn_6.set('fieldLabels', {'gid': 'no label', 'objeto': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'no label', 'in1': 'no label', 'fdc': 'no label', 'sag': 'no label', 'Descripci�': 'no label', });
lyr_ConflictosItekoa_7.set('fieldLabels', {'fid': 'no label', 'Ubicaci0n_': 'inline label - visible with data', 'Conflicto': 'inline label - visible with data', 'DESCRIPCIO': 'no label', 'latitud': 'no label', 'longitud': 'no label', });
lyr_Problemticas_Itekoa_8.set('fieldLabels', {'fid': 'no label', 'Ubicación': 'no label', 'Problemát': 'inline label - visible with data', 'Descripci�': 'inline label - visible with data', 'latitud': 'no label', 'longitud': 'no label', 'etiq resid': 'no label', });
lyr_Entramados_Itekoa_9.set('fieldLabels', {'fid': 'no label', 'Ubicación': 'no label', 'Categoría': 'no label', 'Nombre': 'inline label - visible with data', 'latitud': 'no label', 'longitud': 'no label', 'Descripci�': 'inline label - visible with data', });
lyr_Conflictos_FI_10.set('fieldLabels', {'fid': 'no label', 'Ubicaci�n': 'no label', 'Categor�a': 'no label', 'Descripci�n': 'no label', 'lat': 'no label', 'longitud': 'no label', });
lyr_Problemticas_FI_11.set('fieldLabels', {'fid': 'no label', 'Ubicaci?n': 'no label', 'Categor?a': 'no label', 'Descripci?': 'no label', 'lat': 'no label', 'longitud': 'no label', });
lyr_Entramados_FI_12.set('fieldLabels', {'fid': 'no label', 'Ubicaci?n': 'no label', 'Categor?a': 'no label', 'Descripci?': 'no label', 'lat': 'no label', 'longitud': 'no label', });
lyr_Conflictos_FuerzaI_13.set('fieldLabels', {'fid': 'no label', 'Ubicaci?n': 'no label', 'Categor?a': 'no label', 'Descripci?': 'no label', 'latitud': 'no label', 'longitud': 'no label', });
lyr_Problemticas_FuerzaI_14.set('fieldLabels', {'fid': 'no label', 'Ubicaci?n': 'no label', 'Categor?a': 'no label', 'Descripci?': 'no label', 'latitud': 'no label', 'longitud': 'no label', });
lyr_Entramados_FuerzaI_15.set('fieldLabels', {'fid': 'no label', 'Ubicaci?n': 'no label', 'Categor?a': 'no label', 'Descripci?': 'no label', 'latitud': 'no label', 'longitud': 'no label', });
lyr_Problemticas_Pluri_16.set('fieldLabels', {'fid': 'no label', 'field_1': 'no label', 'Categoría': 'no label', 'Descripción': 'no label', 'latitud': 'no label', 'longitud': 'no label', 'etiqu': 'no label', });
lyr_Problemticas_Pluri_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});