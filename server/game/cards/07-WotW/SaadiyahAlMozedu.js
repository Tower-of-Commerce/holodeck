const DrawCard = require('../../drawcard.js');
const AbilityDsl = require('../../abilitydsl');
const { Locations, CardTypes } = require('../../Constants');

class SaadiyahAlMozedu extends DrawCard {
    setupCardAbilities() {
        this.action({
            title: 'Flip province facedown',
            cost: AbilityDsl.costs.discardCard(card => card.location === Locations.Hand),
            target: {
                cardType: CardTypes.Province,
                location: Locations.Provinces,
                cardCondition: card => !card.isBroken && !card.isConflictProvince()
            },
            effect: 'turn {0} facedown',
            handler: context => {
                context.target.leavesPlay();
                context.target.facedown = true;
            }
        });
    }
}


SaadiyahAlMozedu.id = 'saadiyah-al-mozedu';

module.exports = SaadiyahAlMozedu;
