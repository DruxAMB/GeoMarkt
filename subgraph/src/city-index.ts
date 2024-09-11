import {
  CodeUpdated,
  PriceFeedRequested,
  TokensBought,
  TokensSold,
} from "../generated/templates/CityIndex/CityIndex";
import {
  CodeUpdate,
  PriceFeedRequest,
  TokenBuy,
  TokenSell,
} from "../generated/schema";

// Handler for CodeUpdated event
export function handleCodeUpdated(event: CodeUpdated): void {
  let entity = new CodeUpdate(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  // Populate entity fields with event data
  entity.cityIndex = event.address.toHex(); // Address of the CityIndex contract
  entity.oldCode = event.params.oldCode;
  entity.newCode = event.params.newCode;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;

  // Save the entity
  entity.save();
}

// Handler for PriceFeedRequested event
export function handlePriceFeedRequested(event: PriceFeedRequested): void {
  let entity = new PriceFeedRequest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  // Populate entity fields with event data
  entity.cityIndex = event.address.toHex(); // Address of the CityIndex contract
  entity.subscriptionId = event.params.subscriptionId;
  entity.requestId = event.params.requestId;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;

  // Save the entity
  entity.save();
}

// Handler for TokensBought event
export function handleTokensBought(event: TokensBought): void {
  let entity = new TokenBuy(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  // Populate entity fields with event data
  entity.cityIndex = event.address.toHex(); // Address of the CityIndex contract
  entity.buyer = event.params.buyer;
  entity.amount = event.params.amount;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;

  // Save the entity
  entity.save();
}

// Handler for TokensSold event
export function handleTokensSold(event: TokensSold): void {
  let entity = new TokenSell(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  // Populate entity fields with event data
  entity.cityIndex = event.address.toHex(); // Address of the CityIndex contract
  entity.seller = event.params.seller;
  entity.amount = event.params.amount;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;

  // Save the entity
  entity.save();
}
