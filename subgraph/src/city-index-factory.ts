import { CityIndexCreated as CityIndexCreatedEvent } from "../generated/CityIndexFactory/CityIndexFactory"
import { CityIndexCreated } from "../generated/schema"

export function handleCityIndexCreated(event: CityIndexCreatedEvent): void {
  let entity = new CityIndexCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.cityIndexAddress = event.params.cityIndexAddress
  entity.name = event.params.name
  entity.code = event.params.code
  entity.symbol = event.params.symbol
  entity.squareFeet = event.params.squareFeet

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
