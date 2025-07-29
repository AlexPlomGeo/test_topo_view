// Aggregates

// Color

// Conditionals
function fnc_coalesce(values, context) {
    for (i = 0; i < values.length; i++) {
        if (values[i] !== null) {
            return values[i];
        }
        
    }
    return 'ERROR';
};

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.log10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return false;
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return false;
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return false;
};

function fnc_ceil(values, context) {
    return false;
};

function fnc_pi(values, context) {
    return false;
};

function fnc_to_int(values, context) {
    return false;
};

function fnc_to_real(values, context) {
    return false;
};

function fnc_to_string(values, context) {
    return false;
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return false;
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    return false;
};

function fnc_title(values, context) {
    return false;
};

function fnc_trim(values, context) {
    return false;
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    return false;
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    return false;
};

function fnc_regexp_substr(values, context) {
    return false;
};

function fnc_substr(values, context) {
    return false;
};

function fnc_concat(values, context) {
    return false;
};

function fnc_strpos(values, context) {
    return false;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_label_Contours_1_eval_expression(context) {
    // ELEV || ' m'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['ELEV']  + ' m');
    } else {
        return (feature['ELEV']  + ' m');
    }
}


function exp_label_geodata_spanoudakis_28hsreprojected_2_eval_expression(context) {
    // KAEK || '\n' || DESCR

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['KAEK']  + '\n') + feature.properties['DESCR'] );
    } else {
        return ((feature['KAEK']  + '\n') + feature['DESCR'] );
    }
}


function exp_label_Topo_polygon_3_eval_expression(context) {
    // if(begin = 0, '<b>' || 'Εμβαδόν ιδιοκτησίας Βάση Επιμέτρησης' || ' : ' || '<u>' || area || ' m²' || '</u>' || '<br>' || '\n' || '<br/>' || '<b>' || 'Περίμετρος' || ' : ' || '<u>' || perimeter || ' m' || '</u>', if(begin = 1, in_out || ' : ' || area || ' m²', if(begin = 2, in_out || ' : ' || area || ' m²', if(begin = 3, in_out || ' : ' || area || ' m²', if(begin = 4, in_out || ' : ' || area || ' m²', if(begin = 5, in_out || ' : ' || area || ' m²', if(begin = 6, in_out || ' : ' || area || ' m²', if(begin = 7, in_out || ' : ' || area || ' m²', if(begin = 8, in_out || ' : ' || area || ' m²', if(begin = 9, in_out || ' : ' || area || ' m²', if(begin = 10, in_out || ' : ' || area || ' m²', in_out || ' : ' || area || ' m²')))))))))))

    var feature = context.feature;
    
    if (feature.properties) {
        return fnc_if([(feature.properties['begin']  == 0),(((((((((((((((('<b>' + 'Εμβαδόν ιδιοκτησίας Βάση Επιμέτρησης') + ' : ') + '<u>') + feature.properties['area'] ) + ' m²') + '</u>') + '<br>') + '\n') + '<br/>') + '<b>') + 'Περίμετρος') + ' : ') + '<u>') + feature.properties['perimeter'] ) + ' m') + '</u>'),fnc_if([(feature.properties['begin']  == 1),(((feature.properties['in_out']  + ' : ') + feature.properties['area'] ) + ' m²'),fnc_if([(feature.properties['begin']  == 2),(((feature.properties['in_out']  + ' : ') + feature.properties['area'] ) + ' m²'),fnc_if([(feature.properties['begin']  == 3),(((feature.properties['in_out']  + ' : ') + feature.properties['area'] ) + ' m²'),fnc_if([(feature.properties['begin']  == 4),(((feature.properties['in_out']  + ' : ') + feature.properties['area'] ) + ' m²'),fnc_if([(feature.properties['begin']  == 5),(((feature.properties['in_out']  + ' : ') + feature.properties['area'] ) + ' m²'),fnc_if([(feature.properties['begin']  == 6),(((feature.properties['in_out']  + ' : ') + feature.properties['area'] ) + ' m²'),fnc_if([(feature.properties['begin']  == 7),(((feature.properties['in_out']  + ' : ') + feature.properties['area'] ) + ' m²'),fnc_if([(feature.properties['begin']  == 8),(((feature.properties['in_out']  + ' : ') + feature.properties['area'] ) + ' m²'),fnc_if([(feature.properties['begin']  == 9),(((feature.properties['in_out']  + ' : ') + feature.properties['area'] ) + ' m²'),fnc_if([(feature.properties['begin']  == 10),(((feature.properties['in_out']  + ' : ') + feature.properties['area'] ) + ' m²'),(((feature.properties['in_out']  + ' : ') + feature.properties['area'] ) + ' m²')], context)], context)], context)], context)], context)], context)], context)], context)], context)], context)], context);
    } else {
        return fnc_if([(feature['begin']  == 0),(((((((((((((((('<b>' + 'Εμβαδόν ιδιοκτησίας Βάση Επιμέτρησης') + ' : ') + '<u>') + feature['area'] ) + ' m²') + '</u>') + '<br>') + '\n') + '<br/>') + '<b>') + 'Περίμετρος') + ' : ') + '<u>') + feature['perimeter'] ) + ' m') + '</u>'),fnc_if([(feature['begin']  == 1),(((feature['in_out']  + ' : ') + feature['area'] ) + ' m²'),fnc_if([(feature['begin']  == 2),(((feature['in_out']  + ' : ') + feature['area'] ) + ' m²'),fnc_if([(feature['begin']  == 3),(((feature['in_out']  + ' : ') + feature['area'] ) + ' m²'),fnc_if([(feature['begin']  == 4),(((feature['in_out']  + ' : ') + feature['area'] ) + ' m²'),fnc_if([(feature['begin']  == 5),(((feature['in_out']  + ' : ') + feature['area'] ) + ' m²'),fnc_if([(feature['begin']  == 6),(((feature['in_out']  + ' : ') + feature['area'] ) + ' m²'),fnc_if([(feature['begin']  == 7),(((feature['in_out']  + ' : ') + feature['area'] ) + ' m²'),fnc_if([(feature['begin']  == 8),(((feature['in_out']  + ' : ') + feature['area'] ) + ' m²'),fnc_if([(feature['begin']  == 9),(((feature['in_out']  + ' : ') + feature['area'] ) + ' m²'),fnc_if([(feature['begin']  == 10),(((feature['in_out']  + ' : ') + feature['area'] ) + ' m²'),(((feature['in_out']  + ' : ') + feature['area'] ) + ' m²')], context)], context)], context)], context)], context)], context)], context)], context)], context)], context)], context);
    }
}


function exp_label_geodata_spanoudakis_28hslines_topo_4_eval_expression(context) {
    // if(notes IS NULL OR (begin = 1 OR 3) AND notes = NULL, length || ' m', if(notes = 13, 'Χ.Θ. προσώπου ιδιοκτησίας απο άξονα οδού ' || in_out || ' m', if(notes = 11, 'Επ. οδός Ρούσσας Εκκλησιάς - Ζάκρου [ΕΠ43]', if(notes = 17, 'προϋφιστάμενη 1977 διανοιγμένη οδό πλάτους ' || length || 'm', if(notes = 14, 'πλάτος οδοστρώματος ισόπεδης οδού ' || length || ' m', 'μεσοτοιχία  ' || length || ' m')))))

    var feature = context.feature;
    
    if (feature.properties) {
        return fnc_if([((feature.properties['notes']  === null) || (((feature.properties['begin']  == 1) || 3) && (feature.properties['notes']  == null))),(feature.properties['length']  + ' m'),fnc_if([(feature.properties['notes']  == 13),(('Χ.Θ. προσώπου ιδιοκτησίας απο άξονα οδού ' + feature.properties['in_out'] ) + ' m'),fnc_if([(feature.properties['notes']  == 11),'Επ. οδός Ρούσσας Εκκλησιάς - Ζάκρου [ΕΠ43]',fnc_if([(feature.properties['notes']  == 17),(('προϋφιστάμενη 1977 διανοιγμένη οδό πλάτους ' + feature.properties['length'] ) + 'm'),fnc_if([(feature.properties['notes']  == 14),(('πλάτος οδοστρώματος ισόπεδης οδού ' + feature.properties['length'] ) + ' m'),(('μεσοτοιχία  ' + feature.properties['length'] ) + ' m')], context)], context)], context)], context)], context);
    } else {
        return fnc_if([((feature['notes']  === null) || (((feature['begin']  == 1) || 3) && (feature['notes']  == null))),(feature['length']  + ' m'),fnc_if([(feature['notes']  == 13),(('Χ.Θ. προσώπου ιδιοκτησίας απο άξονα οδού ' + feature['in_out'] ) + ' m'),fnc_if([(feature['notes']  == 11),'Επ. οδός Ρούσσας Εκκλησιάς - Ζάκρου [ΕΠ43]',fnc_if([(feature['notes']  == 17),(('προϋφιστάμενη 1977 διανοιγμένη οδό πλάτους ' + feature['length'] ) + 'm'),fnc_if([(feature['notes']  == 14),(('πλάτος οδοστρώματος ισόπεδης οδού ' + feature['length'] ) + ' m'),(('μεσοτοιχία  ' + feature['length'] ) + ' m')], context)], context)], context)], context)], context);
    }
}


function exp_label_geodata_spanoudakis_28hs__vertices_5_eval_expression(context) {
    // if("Point ID" > 0, "Point ID", if(Descriptio = 'LAMP', 'Στύλος ΔΕΗ/ΟΤΕ', if(Descriptio = '2', 'Ηλ. Εγκαταση', if(Descriptio = '8', "z coord" || 'm', if(Descriptio = '3', 'Γεώτρηση', if(Descriptio = 4, NULL, if(Descriptio = 5, NULL, if(Descriptio = 6, 'Ανεμογεννήτρια', if(Descriptio = 7, 'Πυλώνας Υ/Τ', "0aa")))))))))

    var feature = context.feature;
    
    if (feature.properties) {
        return fnc_if([(feature.properties['Point ID']  > 0),feature.properties['Point ID'] ,fnc_if([(feature.properties['Descriptio']  == 'LAMP'),'Στύλος ΔΕΗ/ΟΤΕ',fnc_if([(feature.properties['Descriptio']  == '2'),'Ηλ. Εγκαταση',fnc_if([(feature.properties['Descriptio']  == '8'),(feature.properties['z coord']  + 'm'),fnc_if([(feature.properties['Descriptio']  == '3'),'Γεώτρηση',fnc_if([(feature.properties['Descriptio']  == 4),null,fnc_if([(feature.properties['Descriptio']  == 5),null,fnc_if([(feature.properties['Descriptio']  == 6),'Ανεμογεννήτρια',fnc_if([(feature.properties['Descriptio']  == 7),'Πυλώνας Υ/Τ',feature.properties['0aa'] ], context)], context)], context)], context)], context)], context)], context)], context)], context);
    } else {
        return fnc_if([(feature['Point ID']  > 0),feature['Point ID'] ,fnc_if([(feature['Descriptio']  == 'LAMP'),'Στύλος ΔΕΗ/ΟΤΕ',fnc_if([(feature['Descriptio']  == '2'),'Ηλ. Εγκαταση',fnc_if([(feature['Descriptio']  == '8'),(feature['z coord']  + 'm'),fnc_if([(feature['Descriptio']  == '3'),'Γεώτρηση',fnc_if([(feature['Descriptio']  == 4),null,fnc_if([(feature['Descriptio']  == 5),null,fnc_if([(feature['Descriptio']  == 6),'Ανεμογεννήτρια',fnc_if([(feature['Descriptio']  == 7),'Πυλώνας Υ/Τ',feature['0aa'] ], context)], context)], context)], context)], context)], context)], context)], context)], context);
    }
}


function exp_label_PST_KAEK_6_eval_expression(context) {
    // 'KAEK:320730438005'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'KAEK:320730438005';
    } else {
        return 'KAEK:320730438005';
    }
}


function exp_label_OT_8_eval_expression(context) {
    // 'OT -130-'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'OT -130-';
    } else {
        return 'OT -130-';
    }
}


function exp_label_Entopismos_topo_11_eval_expression(context) {
    // 'Ιδιοκτησία'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'Ιδιοκτησία';
    } else {
        return 'Ιδιοκτησία';
    }
}