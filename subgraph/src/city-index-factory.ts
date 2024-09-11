import { CityIndexCreated } from "../generated/CityIndexFactory/CityIndexFactory";
import { CityIndex as CityIndexTemplate } from "../generated/templates";
import {
  CityIndexCreated as CityIndexCreatedEntity,
  CityIndex,
  CityIndexFactory,
} from "../generated/schema";

// Handler for CityIndexCreated events
export function handleCityIndexCreated(event: CityIndexCreated): void {
  // Load or create a new CityIndexFactory entity based on the factory address
  let factoryId = event.address.toHex(); // Factory contract address
  let factory = CityIndexFactory.load(factoryId);

  if (factory == null) {
    factory = new CityIndexFactory(factoryId);
    factory.cityIndexes = []; // Initialize an empty list of city indexes
  }

  if (event.params.owner && event.params.cityIndexAddress) {
    // Create a new CityIndex entity for the created CityIndex contract
    let cityIndexId = event.params.cityIndexAddress.toHex(); // CityIndex contract address
    let cityIndex = new CityIndex(cityIndexId); // Provide the cityIndexId to the constructor

    // Store details of the new CityIndex
    cityIndex.owner = event.params.owner;
    cityIndex.name = event.params.name;
    cityIndex.code = event.params.code;
    cityIndex.symbol = event.params.symbol;
    cityIndex.squareFeet = event.params.squareFeet;
    cityIndex.createdAtBlock = event.block.number;
    cityIndex.createdAtTimestamp = event.block.timestamp;

    // Initialize non-nullable fields as empty arrays
    cityIndex.codeUpdates = [];
    cityIndex.priceFeedRequests = [];
    cityIndex.tokenBuys = [];
    cityIndex.tokenSells = [];

    // Add the new CityIndex to the list of cityIndexes in CityIndexFactory
    let cityIndexes = factory.cityIndexes;
    cityIndexes.push(cityIndexId);
    factory.cityIndexes = cityIndexes;

    // Save both the factory and the new city index entities
    cityIndex.save();
  }
  factory.save();

  // Create the CityIndexCreated event entity to store event-specific data
  let entity = new CityIndexCreatedEntity(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  entity.owner = event.params.owner;
  entity.cityIndexAddress = event.params.cityIndexAddress;
  entity.name = event.params.name;
  entity.code = event.params.code;
  entity.symbol = event.params.symbol;
  entity.squareFeet = event.params.squareFeet;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;

  // Save the event entity
  entity.save();

  // Dynamically create a data source for the newly created CityIndex contract
  CityIndexTemplate.create(event.params.cityIndexAddress);
}
