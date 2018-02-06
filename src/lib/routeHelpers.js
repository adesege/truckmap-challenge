import { find, each } from 'lodash';

export function routeExtractShape(route) {
  const result = routeGetResult(route);
  if(!result) return [];
  
  let shape = [];
  each(result.payload.legs, (part) => {
    each(part.steps, (step, i) => {
      each(step.shape, (latlon, j) => {
        let coords = latlon.split(',');
        shape.push({
          latitude: parseFloat(coords[0]),
          longitude: parseFloat(coords[1])
        })
      });
    })
  });

  return shape;
}

export function routeGetRevision(route) {
  if(!route || !route.route_revisions || route.route_revisions.length == 0) return null;
  const revision = find(route.route_revisions, {id: route.route_revision_id});
  if(!revision) return null;
  return revision;
}

export function routeGetResult(route) {
  const revision = routeGetRevision(route);
  if(!revision) return null;
  const result = find(revision.route_results, {id: revision.route_result_id});
  if(!result) return null;
  return result;
}