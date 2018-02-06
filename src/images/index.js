/* TODO - it would be cool to figure out how to build this automatically in a build phase or npm script
 * The require(...) statements need to be in the JS so react-native can link the local image during build,
 * so this automatic manifest-style build process would have to happen before that.
 */

export default images = {
  // Primary
  "truckmap_logo.png": require('./truckmap_logo.png'),
  "truckmap_icon.png": require('./truckmap_icon.png'),

  // Categories
  "icons/categories/truck_stop.png": require('./icons/categories/truck_stop.png'),
  "icons/categories/warehouse_loading.png": require('./icons/categories/warehouse_loading.png'),
  "icons/categories/diesel_fuel.png": require('./icons/categories/diesel_fuel.png'),
  "icons/categories/truck_services.png": require('./icons/categories/truck_services.png'),
  "icons/categories/rest_area.png": require('./icons/categories/rest_area.png'),
  "icons/categories/hotel.png": require('./icons/categories/hotel.png'),
  "icons/categories/grocery_store.png": require('./icons/categories/grocery_store.png'),
  "icons/categories/weigh_station.png": require('./icons/categories/weigh_station.png'),

  // Chains
  "icons/chains/roadys.png": require('./icons/chains/roadys.png'),
  "icons/chains/loves.png": require('./icons/chains/loves.png'),
  "icons/chains/walmart.png": require('./icons/chains/walmart.png'),
  "icons/chains/ta.png": require('./icons/chains/ta.png'),
  "icons/chains/ambest.png": require('./icons/chains/ambest.png'),
  "icons/chains/petro.png": require('./icons/chains/petro.png'),
  "icons/chains/loves_small.png": require('./icons/chains/loves_small.png'),
  "icons/chains/pilot.png": require('./icons/chains/pilot.png'),

  // Misc
  "icons/misc/admin.png": require('./icons/misc/admin.png'),
  "icons/misc/circle_check.png": require('./icons/misc/circle_check.png'),
  "icons/misc/map.png": require('./icons/misc/map.png'),
  "icons/misc/marker.png": require('./icons/misc/marker.png'),
  "icons/misc/search.png": require('./icons/misc/search.png'),
  "icons/misc/toggle_off.png": require('./icons/misc/toggle_off.png'),
  "icons/misc/toggle_on.png": require('./icons/misc/toggle_on.png'),
  "icons/misc/tm.png": require('./icons/misc/tm.png'),
  "icons/misc/waypoint_end.png": require('./icons/misc/waypoint_end.png'),
  "icons/misc/waypoint_start.png": require('./icons/misc/waypoint_start.png'),

  // Features
  "icons/features/air_hose.png": require('./icons/features/air_hose.png'),
  "icons/features/atm.png": require('./icons/features/atm.png'),
  "icons/features/biodiesel.png": require('./icons/features/biodiesel.png'),
  "icons/features/cat_scale.png": require('./icons/features/cat_scale.png'),
  "icons/features/convenience_store.png": require('./icons/features/convenience_store.png'),
  "icons/features/def_lines.png": require('./icons/features/def_lines.png'),
  "icons/features/diesel_fuel.png": require('./icons/features/diesel_fuel.png'),
  "icons/features/grocery_store.png": require('./icons/features/grocery_store.png'),
  "icons/features/laundry.png": require('./icons/features/laundry.png'),
  "icons/features/oil_change.png": require('./icons/features/oil_change.png'),
  "icons/features/open_247.png": require('./icons/features/open_247.png'),
  "icons/features/parking.png": require('./icons/features/parking.png'),
  "icons/features/parking_hazmat.png": require('./icons/features/parking_hazmat.png'),
  "icons/features/parking_overnight.png": require('./icons/features/parking_overnight.png'),
  "icons/features/propane.png": require('./icons/features/propane.png'),
  "icons/features/restrooms.png": require('./icons/features/restrooms.png'),
  "icons/features/roadside_assistance.png": require('./icons/features/roadside_assistance.png'),
  "icons/features/rv_dump_station.png": require('./icons/features/rv_dump_station.png'),
  "icons/features/showers.png": require('./icons/features/showers.png'),
  "icons/features/tire_service.png": require('./icons/features/tire_service.png'),
  "icons/features/towing.png": require('./icons/features/towing.png'),
  "icons/features/truck_dealer.png": require('./icons/features/truck_dealer.png'),
  "icons/features/truck_mechanic.png": require('./icons/features/truck_mechanic.png'),
  "icons/features/truck_wash.png": require('./icons/features/truck_wash.png'),
  "icons/features/weight_scales.png": require('./icons/features/weight_scales.png'),
  "icons/features/wifi.png": require('./icons/features/wifi.png'),

  // Occupations
  "icons/occupations/broker.png": require('./icons/occupations/broker.png'),
  "icons/occupations/carrier.png": require('./icons/occupations/carrier.png'),
  "icons/occupations/other.png": require('./icons/occupations/other.png'),
  "icons/occupations/shipper.png": require('./icons/occupations/shipper.png'),
  "icons/occupations/truck_driver.png": require('./icons/occupations/truck_driver.png'),
  "icons/occupations/warehouse.png": require('./icons/occupations/warehouse.png'),

  // Factoring Providers
  "factoring_providers/apex.png": require('./factoring_providers/apex.png'),
  "factoring_providers/interstate.png": require('./factoring_providers/interstate.png'),
  "factoring_providers/riviera.png": require('./factoring_providers/riviera.png'),
  "factoring_providers/tbs.png": require('./factoring_providers/tbs.png'),
  "factoring_providers/triumph.png": require('./factoring_providers/triumph.png'),

  // Concepts
  "icons/concepts/concept_payment_advance.png": require('./icons/concepts/concept_payment_advance.png'),
}