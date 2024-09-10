import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { CityIndexCreated } from "../generated/CityIndexFactory/CityIndexFactory"

export function createCityIndexCreatedEvent(
  owner: Address,
  cityIndexAddress: Address,
  name: string,
  code: string,
  symbol: string,
  squareFeet: BigInt
): CityIndexCreated {
  let cityIndexCreatedEvent = changetype<CityIndexCreated>(newMockEvent())

  cityIndexCreatedEvent.parameters = new Array()

  cityIndexCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  cityIndexCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "cityIndexAddress",
      ethereum.Value.fromAddress(cityIndexAddress)
    )
  )
  cityIndexCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  cityIndexCreatedEvent.parameters.push(
    new ethereum.EventParam("code", ethereum.Value.fromString(code))
  )
  cityIndexCreatedEvent.parameters.push(
    new ethereum.EventParam("symbol", ethereum.Value.fromString(symbol))
  )
  cityIndexCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "squareFeet",
      ethereum.Value.fromUnsignedBigInt(squareFeet)
    )
  )

  return cityIndexCreatedEvent
}
