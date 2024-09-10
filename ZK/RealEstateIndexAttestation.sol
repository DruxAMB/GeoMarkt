contract RealEstateIndexAttestation is ProofVerifier {
    struct Attestation {
        bytes32 uid;
        bytes32 schema;
        bytes32 uHash;
        address recipient;
        bytes32 publicFieldsHash;
        RealEstateIndexInfo indexInfo;
    }

    mapping(bytes32 => Attestation) private attestations;

    event AttestationCreated(bytes32 indexed uid, address indexed recipient, bytes32 indexed schema);

    constructor() ProofVerifier() {}

    function attest(Proof calldata _proof, RealEstateIndexInfo calldata _indexInfo) public {
        require(verify(_proof), "Proof verification failed");
        
        Attestation memory attestation = Attestation({
            uid: 0,
            schema: _proof.schemaId,
            uHash: _proof.uHash,
            recipient: _proof.recipient,
            publicFieldsHash: _proof.publicFieldsHash,
            indexInfo: _indexInfo
        });

        bytes32 uid;
        uint32 bump = 0;
        while (true) {
            uid = getUID(attestation, bump);
            if (attestations[uid].uid == 0) {
                break;
            }
            unchecked {
                ++bump;
            }
        }

        attestation.uid = uid;
        attestations[uid] = attestation;

        emit AttestationCreated(uid, _proof.recipient, _proof.schemaId);
    }

    function getAttestation(bytes32 uid) public view returns (Attestation memory) {
        return attestations[uid];
    }

    function getUID(Attestation memory attestation, uint32 bump) private pure returns (bytes32) {
        return keccak256(
            abi.encodePacked(
                attestation.schema,
                attestation.uHash,
                attestation.recipient,
                attestation.publicFieldsHash,
                attestation.indexInfo.cityName,
                attestation.indexInfo.citySquareFeet,
                attestation.indexInfo.cityGDP,
                attestation.indexInfo.developmentStage,
                attestation.indexInfo.supply,
                attestation.indexInfo.cityIndexSymbol,
                attestation.indexInfo.developmentStageStatus,
                attestation.indexInfo.documentHash,
                bump
            )
        );
    }
}
