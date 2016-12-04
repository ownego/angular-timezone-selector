/*global angular, _, moment, $, jstz*/

/**
 * angular-timezone-selector
 *
 * A simple directive that allows a user to pick their timezone
 *
 * Author:  Ashok Fernandez <ashok@mish.guru>
 * Date:    12/06/2015
 * License: MIT
 */

angular.module('angular-timezone-selector', [])
  .constant('_', _)
  .constant('moment', moment)
  .factory('timezoneFactory', ['_', 'moment', function (_, moment) {
    return {
      get: function () {
        var timezoneMap = {};
        _.forEach(moment.tz.names(), function (zoneName) {
          var tz = moment.tz(zoneName);
          timezoneMap[zoneName] = {
            id: zoneName,
            name: zoneName.replace(/_/g, ' '),
            offset: 'UTC' + tz.format('Z'),
            nOffset: tz.utcOffset()
          };
        });
        return timezoneMap;
      }
    }
  }])

  // Timezone name to country codemap
  .factory('zoneToCC', ['_', function (_) {
    // Note: zones is populated with the data from 'data/zone.csv' when this file is built
    var zones = [{"id":"1","cca2":"AD","name":"Europe/Andorra"},{"id":"2","cca2":"AE","name":"Asia/Dubai"},{"id":"3","cca2":"AF","name":"Asia/Kabul"},{"id":"4","cca2":"AG","name":"America/Antigua"},{"id":"5","cca2":"AI","name":"America/Anguilla"},{"id":"6","cca2":"AL","name":"Europe/Tirane"},{"id":"7","cca2":"AM","name":"Asia/Yerevan"},{"id":"8","cca2":"AO","name":"Africa/Luanda"},{"id":"9","cca2":"AQ","name":"Antarctica/McMurdo"},{"id":"10","cca2":"AQ","name":"Antarctica/Rothera"},{"id":"11","cca2":"AQ","name":"Antarctica/Palmer"},{"id":"12","cca2":"AQ","name":"Antarctica/Mawson"},{"id":"13","cca2":"AQ","name":"Antarctica/Davis"},{"id":"14","cca2":"AQ","name":"Antarctica/Casey"},{"id":"15","cca2":"AQ","name":"Antarctica/Vostok"},{"id":"16","cca2":"AQ","name":"Antarctica/DumontDUrville"},{"id":"17","cca2":"AQ","name":"Antarctica/Syowa"},{"id":"18","cca2":"AQ","name":"Antarctica/Troll"},{"id":"19","cca2":"AR","name":"America/Argentina/Buenos_Aires"},{"id":"20","cca2":"AR","name":"America/Argentina/Cordoba"},{"id":"21","cca2":"AR","name":"America/Argentina/Salta"},{"id":"22","cca2":"AR","name":"America/Argentina/Jujuy"},{"id":"23","cca2":"AR","name":"America/Argentina/Tucuman"},{"id":"24","cca2":"AR","name":"America/Argentina/Catamarca"},{"id":"25","cca2":"AR","name":"America/Argentina/La_Rioja"},{"id":"26","cca2":"AR","name":"America/Argentina/San_Juan"},{"id":"27","cca2":"AR","name":"America/Argentina/Mendoza"},{"id":"28","cca2":"AR","name":"America/Argentina/San_Luis"},{"id":"29","cca2":"AR","name":"America/Argentina/Rio_Gallegos"},{"id":"30","cca2":"AR","name":"America/Argentina/Ushuaia"},{"id":"31","cca2":"AS","name":"Pacific/Pago_Pago"},{"id":"32","cca2":"AT","name":"Europe/Vienna"},{"id":"33","cca2":"AU","name":"Australia/Lord_Howe"},{"id":"34","cca2":"AU","name":"Antarctica/Macquarie"},{"id":"35","cca2":"AU","name":"Australia/Hobart"},{"id":"36","cca2":"AU","name":"Australia/Currie"},{"id":"37","cca2":"AU","name":"Australia/Melbourne"},{"id":"38","cca2":"AU","name":"Australia/Sydney"},{"id":"39","cca2":"AU","name":"Australia/Broken_Hill"},{"id":"40","cca2":"AU","name":"Australia/Brisbane"},{"id":"41","cca2":"AU","name":"Australia/Lindeman"},{"id":"42","cca2":"AU","name":"Australia/Adelaide"},{"id":"43","cca2":"AU","name":"Australia/Darwin"},{"id":"44","cca2":"AU","name":"Australia/Perth"},{"id":"45","cca2":"AU","name":"Australia/Eucla"},{"id":"46","cca2":"AW","name":"America/Aruba"},{"id":"47","cca2":"AX","name":"Europe/Mariehamn"},{"id":"48","cca2":"AZ","name":"Asia/Baku"},{"id":"49","cca2":"BA","name":"Europe/Sarajevo"},{"id":"50","cca2":"BB","name":"America/Barbados"},{"id":"51","cca2":"BD","name":"Asia/Dhaka"},{"id":"52","cca2":"BE","name":"Europe/Brussels"},{"id":"53","cca2":"BF","name":"Africa/Ouagadougou"},{"id":"54","cca2":"BG","name":"Europe/Sofia"},{"id":"55","cca2":"BH","name":"Asia/Bahrain"},{"id":"56","cca2":"BI","name":"Africa/Bujumbura"},{"id":"57","cca2":"BJ","name":"Africa/Porto-Novo"},{"id":"58","cca2":"BL","name":"America/St_Barthelemy"},{"id":"59","cca2":"BM","name":"Atlantic/Bermuda"},{"id":"60","cca2":"BN","name":"Asia/Brunei"},{"id":"61","cca2":"BO","name":"America/La_Paz"},{"id":"62","cca2":"BQ","name":"America/Kralendijk"},{"id":"63","cca2":"BR","name":"America/Noronha"},{"id":"64","cca2":"BR","name":"America/Belem"},{"id":"65","cca2":"BR","name":"America/Fortaleza"},{"id":"66","cca2":"BR","name":"America/Recife"},{"id":"67","cca2":"BR","name":"America/Araguaina"},{"id":"68","cca2":"BR","name":"America/Maceio"},{"id":"69","cca2":"BR","name":"America/Bahia"},{"id":"70","cca2":"BR","name":"America/Sao_Paulo"},{"id":"71","cca2":"BR","name":"America/Campo_Grande"},{"id":"72","cca2":"BR","name":"America/Cuiaba"},{"id":"73","cca2":"BR","name":"America/Santarem"},{"id":"74","cca2":"BR","name":"America/Porto_Velho"},{"id":"75","cca2":"BR","name":"America/Boa_Vista"},{"id":"76","cca2":"BR","name":"America/Manaus"},{"id":"77","cca2":"BR","name":"America/Eirunepe"},{"id":"78","cca2":"BR","name":"America/Rio_Branco"},{"id":"79","cca2":"BS","name":"America/Nassau"},{"id":"80","cca2":"BT","name":"Asia/Thimphu"},{"id":"81","cca2":"BW","name":"Africa/Gaborone"},{"id":"82","cca2":"BY","name":"Europe/Minsk"},{"id":"83","cca2":"BZ","name":"America/Belize"},{"id":"84","cca2":"CA","name":"America/St_Johns"},{"id":"85","cca2":"CA","name":"America/Halifax"},{"id":"86","cca2":"CA","name":"America/Glace_Bay"},{"id":"87","cca2":"CA","name":"America/Moncton"},{"id":"88","cca2":"CA","name":"America/Goose_Bay"},{"id":"89","cca2":"CA","name":"America/Blanc-Sablon"},{"id":"90","cca2":"CA","name":"America/Toronto"},{"id":"91","cca2":"CA","name":"America/Nipigon"},{"id":"92","cca2":"CA","name":"America/Thunder_Bay"},{"id":"93","cca2":"CA","name":"America/Iqaluit"},{"id":"94","cca2":"CA","name":"America/Pangnirtung"},{"id":"95","cca2":"CA","name":"America/Resolute"},{"id":"96","cca2":"CA","name":"America/Atikokan"},{"id":"97","cca2":"CA","name":"America/Rankin_Inlet"},{"id":"98","cca2":"CA","name":"America/Winnipeg"},{"id":"99","cca2":"CA","name":"America/Rainy_River"},{"id":"100","cca2":"CA","name":"America/Regina"},{"id":"101","cca2":"CA","name":"America/Swift_Current"},{"id":"102","cca2":"CA","name":"America/Edmonton"},{"id":"103","cca2":"CA","name":"America/Cambridge_Bay"},{"id":"104","cca2":"CA","name":"America/Yellowknife"},{"id":"105","cca2":"CA","name":"America/Inuvik"},{"id":"106","cca2":"CA","name":"America/Creston"},{"id":"107","cca2":"CA","name":"America/Dawson_Creek"},{"id":"108","cca2":"CA","name":"America/Vancouver"},{"id":"109","cca2":"CA","name":"America/Whitehorse"},{"id":"110","cca2":"CA","name":"America/Dawson"},{"id":"111","cca2":"CC","name":"Indian/Cocos"},{"id":"112","cca2":"CD","name":"Africa/Kinshasa"},{"id":"113","cca2":"CD","name":"Africa/Lubumbashi"},{"id":"114","cca2":"CF","name":"Africa/Bangui"},{"id":"115","cca2":"CG","name":"Africa/Brazzaville"},{"id":"116","cca2":"CH","name":"Europe/Zurich"},{"id":"117","cca2":"CI","name":"Africa/Abidjan"},{"id":"118","cca2":"CK","name":"Pacific/Rarotonga"},{"id":"119","cca2":"CL","name":"America/Santiago"},{"id":"120","cca2":"CL","name":"Pacific/Easter"},{"id":"121","cca2":"CM","name":"Africa/Douala"},{"id":"122","cca2":"CN","name":"Asia/Shanghai"},{"id":"123","cca2":"CN","name":"Asia/Harbin"},{"id":"124","cca2":"CN","name":"Asia/Chongqing"},{"id":"125","cca2":"CN","name":"Asia/Urumqi"},{"id":"126","cca2":"CN","name":"Asia/Kashgar"},{"id":"127","cca2":"CO","name":"America/Bogota"},{"id":"128","cca2":"CR","name":"America/Costa_Rica"},{"id":"129","cca2":"CU","name":"America/Havana"},{"id":"130","cca2":"CV","name":"Atlantic/Cape_Verde"},{"id":"131","cca2":"CW","name":"America/Curacao"},{"id":"132","cca2":"CX","name":"Indian/Christmas"},{"id":"133","cca2":"CY","name":"Asia/Nicosia"},{"id":"134","cca2":"CZ","name":"Europe/Prague"},{"id":"135","cca2":"DE","name":"Europe/Berlin"},{"id":"136","cca2":"DE","name":"Europe/Busingen"},{"id":"137","cca2":"DJ","name":"Africa/Djibouti"},{"id":"138","cca2":"DK","name":"Europe/Copenhagen"},{"id":"139","cca2":"DM","name":"America/Dominica"},{"id":"140","cca2":"DO","name":"America/Santo_Domingo"},{"id":"141","cca2":"DZ","name":"Africa/Algiers"},{"id":"142","cca2":"EC","name":"America/Guayaquil"},{"id":"143","cca2":"EC","name":"Pacific/Galapagos"},{"id":"144","cca2":"EE","name":"Europe/Tallinn"},{"id":"145","cca2":"EG","name":"Africa/Cairo"},{"id":"146","cca2":"EH","name":"Africa/El_Aaiun"},{"id":"147","cca2":"ER","name":"Africa/Asmara"},{"id":"148","cca2":"ES","name":"Europe/Madrid"},{"id":"149","cca2":"ES","name":"Africa/Ceuta"},{"id":"150","cca2":"ES","name":"Atlantic/Canary"},{"id":"151","cca2":"ET","name":"Africa/Addis_Ababa"},{"id":"152","cca2":"FI","name":"Europe/Helsinki"},{"id":"153","cca2":"FJ","name":"Pacific/Fiji"},{"id":"154","cca2":"FK","name":"Atlantic/Stanley"},{"id":"155","cca2":"FM","name":"Pacific/Chuuk"},{"id":"156","cca2":"FM","name":"Pacific/Pohnpei"},{"id":"157","cca2":"FM","name":"Pacific/Kosrae"},{"id":"158","cca2":"FO","name":"Atlantic/Faroe"},{"id":"159","cca2":"FR","name":"Europe/Paris"},{"id":"160","cca2":"GA","name":"Africa/Libreville"},{"id":"161","cca2":"GB","name":"Europe/London"},{"id":"162","cca2":"GD","name":"America/Grenada"},{"id":"163","cca2":"GE","name":"Asia/Tbilisi"},{"id":"164","cca2":"GF","name":"America/Cayenne"},{"id":"165","cca2":"GG","name":"Europe/Guernsey"},{"id":"166","cca2":"GH","name":"Africa/Accra"},{"id":"167","cca2":"GI","name":"Europe/Gibraltar"},{"id":"168","cca2":"GL","name":"America/Godthab"},{"id":"169","cca2":"GL","name":"America/Danmarkshavn"},{"id":"170","cca2":"GL","name":"America/Scoresbysund"},{"id":"171","cca2":"GL","name":"America/Thule"},{"id":"172","cca2":"GM","name":"Africa/Banjul"},{"id":"173","cca2":"GN","name":"Africa/Conakry"},{"id":"174","cca2":"GP","name":"America/Guadeloupe"},{"id":"175","cca2":"GQ","name":"Africa/Malabo"},{"id":"176","cca2":"GR","name":"Europe/Athens"},{"id":"177","cca2":"GS","name":"Atlantic/South_Georgia"},{"id":"178","cca2":"GT","name":"America/Guatemala"},{"id":"179","cca2":"GU","name":"Pacific/Guam"},{"id":"180","cca2":"GW","name":"Africa/Bissau"},{"id":"181","cca2":"GY","name":"America/Guyana"},{"id":"182","cca2":"HK","name":"Asia/Hong_Kong"},{"id":"183","cca2":"HN","name":"America/Tegucigalpa"},{"id":"184","cca2":"HR","name":"Europe/Zagreb"},{"id":"185","cca2":"HT","name":"America/Port-au-Prince"},{"id":"186","cca2":"HU","name":"Europe/Budapest"},{"id":"187","cca2":"ID","name":"Asia/Jakarta"},{"id":"188","cca2":"ID","name":"Asia/Pontianak"},{"id":"189","cca2":"ID","name":"Asia/Makassar"},{"id":"190","cca2":"ID","name":"Asia/Jayapura"},{"id":"191","cca2":"IE","name":"Europe/Dublin"},{"id":"192","cca2":"IL","name":"Asia/Jerusalem"},{"id":"193","cca2":"IM","name":"Europe/Isle_of_Man"},{"id":"194","cca2":"IN","name":"Asia/Kolkata"},{"id":"195","cca2":"IO","name":"Indian/Chagos"},{"id":"196","cca2":"IQ","name":"Asia/Baghdad"},{"id":"197","cca2":"IR","name":"Asia/Tehran"},{"id":"198","cca2":"IS","name":"Atlantic/Reykjavik"},{"id":"199","cca2":"IT","name":"Europe/Rome"},{"id":"200","cca2":"JE","name":"Europe/Jersey"},{"id":"201","cca2":"JM","name":"America/Jamaica"},{"id":"202","cca2":"JO","name":"Asia/Amman"},{"id":"203","cca2":"JP","name":"Asia/Tokyo"},{"id":"204","cca2":"KE","name":"Africa/Nairobi"},{"id":"205","cca2":"KG","name":"Asia/Bishkek"},{"id":"206","cca2":"KH","name":"Asia/Phnom_Penh"},{"id":"207","cca2":"KI","name":"Pacific/Tarawa"},{"id":"208","cca2":"KI","name":"Pacific/Enderbury"},{"id":"209","cca2":"KI","name":"Pacific/Kiritimati"},{"id":"210","cca2":"KM","name":"Indian/Comoro"},{"id":"211","cca2":"KN","name":"America/St_Kitts"},{"id":"212","cca2":"KP","name":"Asia/Pyongyang"},{"id":"213","cca2":"KR","name":"Asia/Seoul"},{"id":"214","cca2":"KW","name":"Asia/Kuwait"},{"id":"215","cca2":"KY","name":"America/Cayman"},{"id":"216","cca2":"KZ","name":"Asia/Almaty"},{"id":"217","cca2":"KZ","name":"Asia/Qyzylorda"},{"id":"218","cca2":"KZ","name":"Asia/Aqtobe"},{"id":"219","cca2":"KZ","name":"Asia/Aqtau"},{"id":"220","cca2":"KZ","name":"Asia/Oral"},{"id":"221","cca2":"LA","name":"Asia/Vientiane"},{"id":"222","cca2":"LB","name":"Asia/Beirut"},{"id":"223","cca2":"LC","name":"America/St_Lucia"},{"id":"224","cca2":"LI","name":"Europe/Vaduz"},{"id":"225","cca2":"LK","name":"Asia/Colombo"},{"id":"226","cca2":"LR","name":"Africa/Monrovia"},{"id":"227","cca2":"LS","name":"Africa/Maseru"},{"id":"228","cca2":"LT","name":"Europe/Vilnius"},{"id":"229","cca2":"LU","name":"Europe/Luxembourg"},{"id":"230","cca2":"LV","name":"Europe/Riga"},{"id":"231","cca2":"LY","name":"Africa/Tripoli"},{"id":"232","cca2":"MA","name":"Africa/Casablanca"},{"id":"233","cca2":"MC","name":"Europe/Monaco"},{"id":"234","cca2":"MD","name":"Europe/Chisinau"},{"id":"235","cca2":"ME","name":"Europe/Podgorica"},{"id":"236","cca2":"MF","name":"America/Marigot"},{"id":"237","cca2":"MG","name":"Indian/Antananarivo"},{"id":"238","cca2":"MH","name":"Pacific/Majuro"},{"id":"239","cca2":"MH","name":"Pacific/Kwajalein"},{"id":"240","cca2":"MK","name":"Europe/Skopje"},{"id":"241","cca2":"ML","name":"Africa/Bamako"},{"id":"242","cca2":"MM","name":"Asia/Rangoon"},{"id":"243","cca2":"MN","name":"Asia/Ulaanbaatar"},{"id":"244","cca2":"MN","name":"Asia/Hovd"},{"id":"245","cca2":"MN","name":"Asia/Choibalsan"},{"id":"246","cca2":"MO","name":"Asia/Macau"},{"id":"247","cca2":"MP","name":"Pacific/Saipan"},{"id":"248","cca2":"MQ","name":"America/Martinique"},{"id":"249","cca2":"MR","name":"Africa/Nouakchott"},{"id":"250","cca2":"MS","name":"America/Montserrat"},{"id":"251","cca2":"MT","name":"Europe/Malta"},{"id":"252","cca2":"MU","name":"Indian/Mauritius"},{"id":"253","cca2":"MV","name":"Indian/Maldives"},{"id":"254","cca2":"MW","name":"Africa/Blantyre"},{"id":"255","cca2":"MX","name":"America/Mexico_City"},{"id":"256","cca2":"MX","name":"America/Cancun"},{"id":"257","cca2":"MX","name":"America/Merida"},{"id":"258","cca2":"MX","name":"America/Monterrey"},{"id":"259","cca2":"MX","name":"America/Matamoros"},{"id":"260","cca2":"MX","name":"America/Mazatlan"},{"id":"261","cca2":"MX","name":"America/Chihuahua"},{"id":"262","cca2":"MX","name":"America/Ojinaga"},{"id":"263","cca2":"MX","name":"America/Hermosillo"},{"id":"264","cca2":"MX","name":"America/Tijuana"},{"id":"265","cca2":"MX","name":"America/Santa_Isabel"},{"id":"266","cca2":"MX","name":"America/Bahia_Banderas"},{"id":"267","cca2":"MY","name":"Asia/Kuala_Lumpur"},{"id":"268","cca2":"MY","name":"Asia/Kuching"},{"id":"269","cca2":"MZ","name":"Africa/Maputo"},{"id":"270","cca2":"NA","name":"Africa/Windhoek"},{"id":"271","cca2":"NC","name":"Pacific/Noumea"},{"id":"272","cca2":"NE","name":"Africa/Niamey"},{"id":"273","cca2":"NF","name":"Pacific/Norfolk"},{"id":"274","cca2":"NG","name":"Africa/Lagos"},{"id":"275","cca2":"NI","name":"America/Managua"},{"id":"276","cca2":"NL","name":"Europe/Amsterdam"},{"id":"277","cca2":"NO","name":"Europe/Oslo"},{"id":"278","cca2":"NP","name":"Asia/Kathmandu"},{"id":"279","cca2":"NR","name":"Pacific/Nauru"},{"id":"280","cca2":"NU","name":"Pacific/Niue"},{"id":"281","cca2":"NZ","name":"Pacific/Auckland"},{"id":"282","cca2":"NZ","name":"Pacific/Chatham"},{"id":"283","cca2":"OM","name":"Asia/Muscat"},{"id":"284","cca2":"PA","name":"America/Panama"},{"id":"285","cca2":"PE","name":"America/Lima"},{"id":"286","cca2":"PF","name":"Pacific/Tahiti"},{"id":"287","cca2":"PF","name":"Pacific/Marquesas"},{"id":"288","cca2":"PF","name":"Pacific/Gambier"},{"id":"289","cca2":"PG","name":"Pacific/Port_Moresby"},{"id":"290","cca2":"PH","name":"Asia/Manila"},{"id":"291","cca2":"PK","name":"Asia/Karachi"},{"id":"292","cca2":"PL","name":"Europe/Warsaw"},{"id":"293","cca2":"PM","name":"America/Miquelon"},{"id":"294","cca2":"PN","name":"Pacific/Pitcairn"},{"id":"295","cca2":"PR","name":"America/Puerto_Rico"},{"id":"296","cca2":"PS","name":"Asia/Gaza"},{"id":"297","cca2":"PS","name":"Asia/Hebron"},{"id":"298","cca2":"PT","name":"Europe/Lisbon"},{"id":"299","cca2":"PT","name":"Atlantic/Madeira"},{"id":"300","cca2":"PT","name":"Atlantic/Azores"},{"id":"301","cca2":"PW","name":"Pacific/Palau"},{"id":"302","cca2":"PY","name":"America/Asuncion"},{"id":"303","cca2":"QA","name":"Asia/Qatar"},{"id":"304","cca2":"RE","name":"Indian/Reunion"},{"id":"305","cca2":"RO","name":"Europe/Bucharest"},{"id":"306","cca2":"RS","name":"Europe/Belgrade"},{"id":"307","cca2":"RU","name":"Europe/Kaliningrad"},{"id":"308","cca2":"RU","name":"Europe/Moscow"},{"id":"309","cca2":"RU","name":"Europe/Volgograd"},{"id":"310","cca2":"RU","name":"Europe/Samara"},{"id":"311","cca2":"RU","name":"Europe/Simferopol"},{"id":"312","cca2":"RU","name":"Asia/Yekaterinburg"},{"id":"313","cca2":"RU","name":"Asia/Omsk"},{"id":"314","cca2":"RU","name":"Asia/Novosibirsk"},{"id":"315","cca2":"RU","name":"Asia/Novokuznetsk"},{"id":"316","cca2":"RU","name":"Asia/Krasnoyarsk"},{"id":"317","cca2":"RU","name":"Asia/Irkutsk"},{"id":"318","cca2":"RU","name":"Asia/Yakutsk"},{"id":"319","cca2":"RU","name":"Asia/Khandyga"},{"id":"320","cca2":"RU","name":"Asia/Vladivostok"},{"id":"321","cca2":"RU","name":"Asia/Sakhalin"},{"id":"322","cca2":"RU","name":"Asia/Ust-Nera"},{"id":"323","cca2":"RU","name":"Asia/Magadan"},{"id":"324","cca2":"RU","name":"Asia/Kamchatka"},{"id":"325","cca2":"RU","name":"Asia/Anadyr"},{"id":"326","cca2":"RW","name":"Africa/Kigali"},{"id":"327","cca2":"SA","name":"Asia/Riyadh"},{"id":"328","cca2":"SB","name":"Pacific/Guadalcanal"},{"id":"329","cca2":"SC","name":"Indian/Mahe"},{"id":"330","cca2":"SD","name":"Africa/Khartoum"},{"id":"331","cca2":"SE","name":"Europe/Stockholm"},{"id":"332","cca2":"SG","name":"Asia/Singapore"},{"id":"333","cca2":"SH","name":"Atlantic/St_Helena"},{"id":"334","cca2":"SI","name":"Europe/Ljubljana"},{"id":"335","cca2":"SJ","name":"Arctic/Longyearbyen"},{"id":"336","cca2":"SK","name":"Europe/Bratislava"},{"id":"337","cca2":"SL","name":"Africa/Freetown"},{"id":"338","cca2":"SM","name":"Europe/San_Marino"},{"id":"339","cca2":"SN","name":"Africa/Dakar"},{"id":"340","cca2":"SO","name":"Africa/Mogadishu"},{"id":"341","cca2":"SR","name":"America/Paramaribo"},{"id":"342","cca2":"SS","name":"Africa/Juba"},{"id":"343","cca2":"ST","name":"Africa/Sao_Tome"},{"id":"344","cca2":"SV","name":"America/El_Salvador"},{"id":"345","cca2":"SX","name":"America/Lower_Princes"},{"id":"346","cca2":"SY","name":"Asia/Damascus"},{"id":"347","cca2":"SZ","name":"Africa/Mbabane"},{"id":"348","cca2":"TC","name":"America/Grand_Turk"},{"id":"349","cca2":"TD","name":"Africa/Ndjamena"},{"id":"350","cca2":"TF","name":"Indian/Kerguelen"},{"id":"351","cca2":"TG","name":"Africa/Lome"},{"id":"352","cca2":"TH","name":"Asia/Bangkok"},{"id":"353","cca2":"TJ","name":"Asia/Dushanbe"},{"id":"354","cca2":"TK","name":"Pacific/Fakaofo"},{"id":"355","cca2":"TL","name":"Asia/Dili"},{"id":"356","cca2":"TM","name":"Asia/Ashgabat"},{"id":"357","cca2":"TN","name":"Africa/Tunis"},{"id":"358","cca2":"TO","name":"Pacific/Tongatapu"},{"id":"359","cca2":"TR","name":"Europe/Istanbul"},{"id":"360","cca2":"TT","name":"America/Port_of_Spain"},{"id":"361","cca2":"TV","name":"Pacific/Funafuti"},{"id":"362","cca2":"TW","name":"Asia/Taipei"},{"id":"363","cca2":"TZ","name":"Africa/Dar_es_Salaam"},{"id":"364","cca2":"UA","name":"Europe/Kiev"},{"id":"365","cca2":"UA","name":"Europe/Uzhgorod"},{"id":"366","cca2":"UA","name":"Europe/Zaporozhye"},{"id":"367","cca2":"UG","name":"Africa/Kampala"},{"id":"368","cca2":"UM","name":"Pacific/Johnston"},{"id":"369","cca2":"UM","name":"Pacific/Midway"},{"id":"370","cca2":"UM","name":"Pacific/Wake"},{"id":"371","cca2":"US","name":"America/New_York"},{"id":"372","cca2":"US","name":"America/Detroit"},{"id":"373","cca2":"US","name":"America/Kentucky/Louisville"},{"id":"374","cca2":"US","name":"America/Kentucky/Monticello"},{"id":"375","cca2":"US","name":"America/Indiana/Indianapolis"},{"id":"376","cca2":"US","name":"America/Indiana/Vincennes"},{"id":"377","cca2":"US","name":"America/Indiana/Winamac"},{"id":"378","cca2":"US","name":"America/Indiana/Marengo"},{"id":"379","cca2":"US","name":"America/Indiana/Petersburg"},{"id":"380","cca2":"US","name":"America/Indiana/Vevay"},{"id":"381","cca2":"US","name":"America/Chicago"},{"id":"382","cca2":"US","name":"America/Indiana/Tell_City"},{"id":"383","cca2":"US","name":"America/Indiana/Knox"},{"id":"384","cca2":"US","name":"America/Menominee"},{"id":"385","cca2":"US","name":"America/North_Dakota/Center"},{"id":"386","cca2":"US","name":"America/North_Dakota/New_Salem"},{"id":"387","cca2":"US","name":"America/North_Dakota/Beulah"},{"id":"388","cca2":"US","name":"America/Denver"},{"id":"389","cca2":"US","name":"America/Boise"},{"id":"390","cca2":"US","name":"America/Phoenix"},{"id":"391","cca2":"US","name":"America/Los_Angeles"},{"id":"392","cca2":"US","name":"America/Anchorage"},{"id":"393","cca2":"US","name":"America/Juneau"},{"id":"394","cca2":"US","name":"America/Sitka"},{"id":"395","cca2":"US","name":"America/Yakutat"},{"id":"396","cca2":"US","name":"America/Nome"},{"id":"397","cca2":"US","name":"America/Adak"},{"id":"398","cca2":"US","name":"America/Metlakatla"},{"id":"399","cca2":"US","name":"Pacific/Honolulu"},{"id":"400","cca2":"UY","name":"America/Montevideo"},{"id":"401","cca2":"UZ","name":"Asia/Samarkand"},{"id":"402","cca2":"UZ","name":"Asia/Tashkent"},{"id":"403","cca2":"VA","name":"Europe/Vatican"},{"id":"404","cca2":"VC","name":"America/St_Vincent"},{"id":"405","cca2":"VE","name":"America/Caracas"},{"id":"406","cca2":"VG","name":"America/Tortola"},{"id":"407","cca2":"VI","name":"America/St_Thomas"},{"id":"408","cca2":"VN","name":"Asia/Ho_Chi_Minh"},{"id":"409","cca2":"VU","name":"Pacific/Efate"},{"id":"410","cca2":"WF","name":"Pacific/Wallis"},{"id":"411","cca2":"WS","name":"Pacific/Apia"},{"id":"412","cca2":"YE","name":"Asia/Aden"},{"id":"413","cca2":"YT","name":"Indian/Mayotte"},{"id":"414","cca2":"ZA","name":"Africa/Johannesburg"},{"id":"415","cca2":"ZM","name":"Africa/Lusaka"},{"id":"416","cca2":"ZW","name":"Africa/Harare"},{"id":"417","cca2":"CA","name":"America/Montreal"}];
    var zoneMap = {};
    _.forEach(zones, function (zone) {
      zoneMap[zone.name] = zone.cca2;
    });
    return zoneMap;
  }])

  // Country code to country name map
  .factory('CCToCountryName', ['_', function (_) {
    // Note: codes is populated with the data from 'data/cca2_to_country_name.csv' when this file is built
    var codes = [{"cca2":"AF","name":"Afghanistan"},{"cca2":"AX","name":"Aland Islands"},{"cca2":"AL","name":"Albania"},{"cca2":"DZ","name":"Algeria"},{"cca2":"AS","name":"American Samoa"},{"cca2":"AD","name":"Andorra"},{"cca2":"AO","name":"Angola"},{"cca2":"AI","name":"Anguilla"},{"cca2":"AQ","name":"Antarctica"},{"cca2":"AG","name":"Antigua And Barbuda"},{"cca2":"AR","name":"Argentina"},{"cca2":"AM","name":"Armenia"},{"cca2":"AW","name":"Aruba"},{"cca2":"AU","name":"Australia"},{"cca2":"AT","name":"Austria"},{"cca2":"AZ","name":"Azerbaijan"},{"cca2":"BS","name":"Bahamas"},{"cca2":"BH","name":"Bahrain"},{"cca2":"BD","name":"Bangladesh"},{"cca2":"BB","name":"Barbados"},{"cca2":"BY","name":"Belarus"},{"cca2":"BE","name":"Belgium"},{"cca2":"BZ","name":"Belize"},{"cca2":"BJ","name":"Benin"},{"cca2":"BM","name":"Bermuda"},{"cca2":"BT","name":"Bhutan"},{"cca2":"BO","name":"Bolivia"},{"cca2":"BA","name":"Bosnia And Herzegovina"},{"cca2":"BW","name":"Botswana"},{"cca2":"BV","name":"Bouvet Island"},{"cca2":"BR","name":"Brazil"},{"cca2":"IO","name":"British Indian Ocean Territory"},{"cca2":"BN","name":"Brunei Darussalam"},{"cca2":"BG","name":"Bulgaria"},{"cca2":"BF","name":"Burkina Faso"},{"cca2":"BI","name":"Burundi"},{"cca2":"KH","name":"Cambodia"},{"cca2":"CM","name":"Cameroon"},{"cca2":"CA","name":"Canada"},{"cca2":"CV","name":"Cape Verde"},{"cca2":"KY","name":"Cayman Islands"},{"cca2":"CF","name":"Central African Republic"},{"cca2":"TD","name":"Chad"},{"cca2":"CL","name":"Chile"},{"cca2":"CN","name":"China"},{"cca2":"CX","name":"Christmas Island"},{"cca2":"CC","name":"Cocos (Keeling) Islands"},{"cca2":"CO","name":"Colombia"},{"cca2":"KM","name":"Comoros"},{"cca2":"CG","name":"Congo"},{"cca2":"CD","name":"Congo (Democratic Republic)"},{"cca2":"CK","name":"Cook Islands"},{"cca2":"CR","name":"Costa Rica"},{"cca2":"CI","name":"Cote D'Ivoire"},{"cca2":"HR","name":"Croatia"},{"cca2":"CU","name":"Cuba"},{"cca2":"CY","name":"Cyprus"},{"cca2":"CZ","name":"Czech Republic"},{"cca2":"DK","name":"Denmark"},{"cca2":"DJ","name":"Djibouti"},{"cca2":"DM","name":"Dominica"},{"cca2":"DO","name":"Dominican Republic"},{"cca2":"EC","name":"Ecuador"},{"cca2":"EG","name":"Egypt"},{"cca2":"SV","name":"El Salvador"},{"cca2":"GQ","name":"Equatorial Guinea"},{"cca2":"ER","name":"Eritrea"},{"cca2":"EE","name":"Estonia"},{"cca2":"ET","name":"Ethiopia"},{"cca2":"FK","name":"Falkland Islands (Malvinas)"},{"cca2":"FO","name":"Faroe Islands"},{"cca2":"FJ","name":"Fiji"},{"cca2":"FI","name":"Finland"},{"cca2":"FR","name":"France"},{"cca2":"GF","name":"French Guiana"},{"cca2":"PF","name":"French Polynesia"},{"cca2":"TF","name":"French Southern Territories"},{"cca2":"GA","name":"Gabon"},{"cca2":"GM","name":"Gambia"},{"cca2":"GE","name":"Georgia"},{"cca2":"DE","name":"Germany"},{"cca2":"GH","name":"Ghana"},{"cca2":"GI","name":"Gibraltar"},{"cca2":"GR","name":"Greece"},{"cca2":"GL","name":"Greenland"},{"cca2":"GD","name":"Grenada"},{"cca2":"GP","name":"Guadeloupe"},{"cca2":"GU","name":"Guam"},{"cca2":"GT","name":"Guatemala"},{"cca2":"GG","name":"Guernsey"},{"cca2":"GN","name":"Guinea"},{"cca2":"GW","name":"Guinea-Bissau"},{"cca2":"GY","name":"Guyana"},{"cca2":"HT","name":"Haiti"},{"cca2":"HM","name":"Heard Island & Mcdonald Islands"},{"cca2":"VA","name":"Holy See (Vatican City State)"},{"cca2":"HN","name":"Honduras"},{"cca2":"HK","name":"Hong Kong"},{"cca2":"HU","name":"Hungary"},{"cca2":"IS","name":"Iceland"},{"cca2":"IN","name":"India"},{"cca2":"ID","name":"Indonesia"},{"cca2":"IR","name":"Iran (Islamic Republic Of)"},{"cca2":"IQ","name":"Iraq"},{"cca2":"IE","name":"Ireland"},{"cca2":"IM","name":"Isle Of Man"},{"cca2":"IL","name":"Israel"},{"cca2":"IT","name":"Italy"},{"cca2":"JM","name":"Jamaica"},{"cca2":"JP","name":"Japan"},{"cca2":"JE","name":"Jersey"},{"cca2":"JO","name":"Jordan"},{"cca2":"KZ","name":"Kazakhstan"},{"cca2":"KE","name":"Kenya"},{"cca2":"KI","name":"Kiribati"},{"cca2":"KR","name":"Korea"},{"cca2":"KW","name":"Kuwait"},{"cca2":"KG","name":"Kyrgyzstan"},{"cca2":"LA","name":"Lao People's Democratic Republic"},{"cca2":"LV","name":"Latvia"},{"cca2":"LB","name":"Lebanon"},{"cca2":"LS","name":"Lesotho"},{"cca2":"LR","name":"Liberia"},{"cca2":"LY","name":"Libyan Arab Jamahiriya"},{"cca2":"LI","name":"Liechtenstein"},{"cca2":"LT","name":"Lithuania"},{"cca2":"LU","name":"Luxembourg"},{"cca2":"MO","name":"Macao"},{"cca2":"MK","name":"Macedonia"},{"cca2":"MG","name":"Madagascar"},{"cca2":"MW","name":"Malawi"},{"cca2":"MY","name":"Malaysia"},{"cca2":"MV","name":"Maldives"},{"cca2":"ML","name":"Mali"},{"cca2":"MT","name":"Malta"},{"cca2":"MH","name":"Marshall Islands"},{"cca2":"MQ","name":"Martinique"},{"cca2":"MR","name":"Mauritania"},{"cca2":"MU","name":"Mauritius"},{"cca2":"YT","name":"Mayotte"},{"cca2":"MX","name":"Mexico"},{"cca2":"FM","name":"Micronesia (Federated States Of)"},{"cca2":"MD","name":"Moldova"},{"cca2":"MC","name":"Monaco"},{"cca2":"MN","name":"Mongolia"},{"cca2":"ME","name":"Montenegro"},{"cca2":"MS","name":"Montserrat"},{"cca2":"MA","name":"Morocco"},{"cca2":"MZ","name":"Mozambique"},{"cca2":"MM","name":"Myanmar"},{"cca2":"NA","name":"Namibia"},{"cca2":"NR","name":"Nauru"},{"cca2":"NP","name":"Nepal"},{"cca2":"NL","name":"Netherlands"},{"cca2":"AN","name":"Netherlands Antilles"},{"cca2":"NC","name":"New Caledonia"},{"cca2":"NZ","name":"New Zealand"},{"cca2":"NI","name":"Nicaragua"},{"cca2":"NE","name":"Niger"},{"cca2":"NG","name":"Nigeria"},{"cca2":"NU","name":"Niue"},{"cca2":"NF","name":"Norfolk Island"},{"cca2":"MP","name":"Northern Mariana Islands"},{"cca2":"NO","name":"Norway"},{"cca2":"OM","name":"Oman"},{"cca2":"PK","name":"Pakistan"},{"cca2":"PW","name":"Palau"},{"cca2":"PS","name":"Palestinian Territory (Occupied)"},{"cca2":"PA","name":"Panama"},{"cca2":"PG","name":"Papua New Guinea"},{"cca2":"PY","name":"Paraguay"},{"cca2":"PE","name":"Peru"},{"cca2":"PH","name":"Philippines"},{"cca2":"PN","name":"Pitcairn"},{"cca2":"PL","name":"Poland"},{"cca2":"PT","name":"Portugal"},{"cca2":"PR","name":"Puerto Rico"},{"cca2":"QA","name":"Qatar"},{"cca2":"RE","name":"Reunion"},{"cca2":"RO","name":"Romania"},{"cca2":"RU","name":"Russian Federation"},{"cca2":"RW","name":"Rwanda"},{"cca2":"BL","name":"Saint Barthelemy"},{"cca2":"SH","name":"Saint Helena"},{"cca2":"KN","name":"Saint Kitts And Nevis"},{"cca2":"LC","name":"Saint Lucia"},{"cca2":"MF","name":"Saint Martin"},{"cca2":"PM","name":"Saint Pierre And Miquelon"},{"cca2":"VC","name":"Saint Vincent And Grenadines"},{"cca2":"WS","name":"Samoa"},{"cca2":"SM","name":"San Marino"},{"cca2":"ST","name":"Sao Tome And Principe"},{"cca2":"SA","name":"Saudi Arabia"},{"cca2":"SN","name":"Senegal"},{"cca2":"RS","name":"Serbia"},{"cca2":"SC","name":"Seychelles"},{"cca2":"SL","name":"Sierra Leone"},{"cca2":"SG","name":"Singapore"},{"cca2":"SK","name":"Slovakia"},{"cca2":"SI","name":"Slovenia"},{"cca2":"SB","name":"Solomon Islands"},{"cca2":"SO","name":"Somalia"},{"cca2":"SS","name":"South Sudan"},{"cca2":"ZA","name":"South Africa"},{"cca2":"GS","name":"South Georgia And Sandwich Isl."},{"cca2":"ES","name":"Spain"},{"cca2":"LK","name":"Sri Lanka"},{"cca2":"SD","name":"Sudan"},{"cca2":"SR","name":"Suriname"},{"cca2":"SJ","name":"Svalbard And Jan Mayen"},{"cca2":"SZ","name":"Swaziland"},{"cca2":"SE","name":"Sweden"},{"cca2":"CH","name":"Switzerland"},{"cca2":"SY","name":"Syrian Arab Republic"},{"cca2":"TW","name":"Taiwan"},{"cca2":"TJ","name":"Tajikistan"},{"cca2":"TZ","name":"Tanzania"},{"cca2":"TH","name":"Thailand"},{"cca2":"TL","name":"Timor-Leste"},{"cca2":"TG","name":"Togo"},{"cca2":"TK","name":"Tokelau"},{"cca2":"TO","name":"Tonga"},{"cca2":"TT","name":"Trinidad And Tobago"},{"cca2":"TN","name":"Tunisia"},{"cca2":"TR","name":"Turkey"},{"cca2":"TM","name":"Turkmenistan"},{"cca2":"TC","name":"Turks And Caicos Islands"},{"cca2":"TV","name":"Tuvalu"},{"cca2":"UG","name":"Uganda"},{"cca2":"UA","name":"Ukraine"},{"cca2":"AE","name":"United Arab Emirates"},{"cca2":"GB","name":"United Kingdom"},{"cca2":"US","name":"United States"},{"cca2":"UM","name":"United States Outlying Islands"},{"cca2":"UY","name":"Uruguay"},{"cca2":"UZ","name":"Uzbekistan"},{"cca2":"VU","name":"Vanuatu"},{"cca2":"VE","name":"Venezuela"},{"cca2":"VN","name":"Viet Nam"},{"cca2":"VG","name":"Virgin Islands (British)"},{"cca2":"VI","name":"Virgin Islands (U.S.)"},{"cca2":"WF","name":"Wallis And Futuna"},{"cca2":"EH","name":"Western Sahara"},{"cca2":"YE","name":"Yemen"},{"cca2":"ZM","name":"Zambia"},{"cca2":"ZW","name":"Zimbabwe"},{"cca2":"SX","name":"Sint Maarten"},{"cca2":"CW","name":"Curacao"},{"cca2":"BQ","name":"Bonaire"},{"cca2":"KP","name":"North Korea"}];
    var codeMap = {};
    _.forEach(codes, function (code) {
      codeMap[code.cca2] = code.name;
    });
    return codeMap;
  }])

  .directive('timezoneSelector', ['_', 'moment', 'timezoneFactory', 'zoneToCC', 'CCToCountryName', function (_, moment, timezoneFactory, zoneToCC, CCToCountryName) {
    return {
      restrict: 'E',
      replace: true,
      template: '<select style="min-width:260px;"></select>',
      scope: {
        ngModel: '=',
        translations: '='
      },
      link: function ($scope, elem, attrs) {
        var data = [];
        var timezones = timezoneFactory.get();

        // Group the timezones by their country code
        var timezonesGroupedByCC = {};
        _.forEach(timezones, function (timezone) {
          if (_.has(zoneToCC, timezone.id)) {
            var CC = zoneToCC[timezone.id];
            timezonesGroupedByCC[CC] = !timezonesGroupedByCC[CC] ? [] : timezonesGroupedByCC[CC];
            timezonesGroupedByCC[CC].push(timezone);
          }
        });

        // Add the grouped countries to the data array with their country name as the group option
        _.forEach(timezonesGroupedByCC, function (zonesByCountry, CC) {
          var zonesForCountry = {
            text: CCToCountryName[CC] + ': ',
            children: zonesByCountry,
            firstNOffset: zonesByCountry[0].nOffset
          };

          data.push(zonesForCountry);
        });

        // Sort by UTC or country name
        if (attrs.sortBy === 'offset') {
          data = _.sortBy(data, 'firstNOffset');
          _.forEach(data, function (zonesForCountry, key) {
            zonesForCountry.children = _.sortBy(zonesForCountry.children, 'nOffset');
          });
        } else {
          data = _.sortBy(data, 'text');
        }

        // add initial options forlocal
        if (attrs.showLocal !== undefined) {
          if (jstz !== undefined) {
            // Make sure the tz from jstz has underscores replaced with spaces so it matches
            // the format used in timezoneFactory
            var extraTZs = _.filter(timezones, { 'id': jstz.determine().name() });
          } else {
            var localUTC = 'UTC' + moment().format('Z');
            extraTZs = _.filter(timezones, {'offset': localUTC});
          }

          if (extraTZs !== undefined && extraTZs.length > 0) {
            data.splice(0, 0, {
              text: _.get($scope, 'translations.local', 'Local') + ': ',
              children: extraTZs,
              firstNOffset: extraTZs[0].nOffset,
              firstOffset: extraTZs[0].offset
            });
          }
        }

        if (attrs.setLocal !== undefined) {
          if (jstz !== undefined) {
            $scope.ngModel || ($scope.ngModel = jstz.determine().name());
          }
        }

        // add initial options
        if (attrs.primaryChoices !== undefined) {
          var primaryChoices = [];
          _.forEach(attrs.primaryChoices.split(' '), function (choice) {
            primaryChoices.push(choice.replace('_', ' '));
          });
          extraTZs = _.filter(timezones, function (tz) { return _.includes(primaryChoices, tz.name) });

          if (extraTZs !== undefined && extraTZs.length > 0) {
            data.splice(0, 0, {
              text: _.get($scope, 'translations.primary', 'Primary') + ': ',
              children: extraTZs,
              firstNOffset: extraTZs[0].nOffset,
              firstOffset: extraTZs[0].offset
            });
          }
        }

        // Construct a select box with the timezones grouped by country
        _.forEach(data, function (group) {
          var optgroup = $('<optgroup label="' + group.text + '">');
          group.children.forEach(function (option) {
            var $doc = document
              , $win = window
              , _screenWidth = $win.innerWidth
                            || $doc.documentElement.clientWidth
                            || $doc.body.clientWidth
              ;

            if (_screenWidth >= 480) {
              if (attrs.displayUtc === 'true' && option.name.indexOf('(UTC') === -1) {
                option.name = option.name + ' (' + option.offset + ')';
              }
            }

            optgroup.append('<option value="' + option.id + '">' +
              option.name + '</option>');
          })
          elem.append(optgroup);
        });

        // Initialise the chosen box
        elem.chosen({
          width: attrs.width || '300px',
          include_group_label_in_selected: true,
          search_contains: true,
          no_results_text: _.get($scope, 'translations.no_results_text',
              'No results, try searching for the name of your country or nearest major city.'),
          placeholder_text_single: _.get($scope, 'translations.placeholder', 'Choose a timezone')
        });

        // Update the box if ngModel changes
        $scope.$watch('ngModel', function () {
          elem.val($scope.ngModel);
          elem.trigger('chosen:updated');
        });
      }
    }
  }]);
