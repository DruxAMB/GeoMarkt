import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { CityIndexCreated } from "../generated/schema"
import { CityIndexCreated as CityIndexCreatedEvent } from "../generated/CityIndexFactory/CityIndexFactory"
import { handleCityIndexCreated } from "../src/city-index-factory"
import { createCityIndexCreatedEvent } from "./city-index-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let cityIndexAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let name = "Example string value"
    let code = "Example string value"
    let symbol = "Example string value"
    let squareFeet = BigInt.fromI32(234)
    let newCityIndexCreatedEvent = createCityIndexCreatedEvent(
      owner,
      cityIndexAddress,
      name,
      code,
      symbol,
      squareFeet
    )
    handleCityIndexCreated(newCityIndexCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CityIndexCreated created and stored", () => {
    assert.entityCount("CityIndexCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CityIndexCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CityIndexCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "cityIndexAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CityIndexCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "CityIndexCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "code",
      "Example string value"
    )
    assert.fieldEquals(
      "CityIndexCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "symbol",
      "Example string value"
    )
    assert.fieldEquals(
      "CityIndexCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "squareFeet",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
