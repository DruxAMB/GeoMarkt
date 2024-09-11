import { CityIndexCreated } from "../generated/CityIndexFactory/CityIndexFactory";
import { CityIndex as CityIndexTemplate } from "../generated/templates";
import { CityIndexCreated as CityIndexCreatedEntity } from "../generated/schema";

export function handleCityIndexCreated(event: CityIndexCreated): void {
  // Create a new CityIndexCreated entity to store the event data
  let entity = new CityIndexCreatedEntity(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  // Store event parameters in the entity
  entity.owner = event.params.owner;
  entity.cityIndexAddress = event.params.cityIndexAddress;
  entity.name = event.params.name;
  entity.code = event.params.code;
  entity.symbol = event.params.symbol;
  entity.squareFeet = event.params.squareFeet;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;

  // Save the entity to the subgraph
  entity.save();

  // Dynamically create a data source for the newly created CityIndex contract
  CityIndexTemplate.create(event.params.cityIndexAddress);
}
