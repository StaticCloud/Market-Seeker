import { 
    acceleratorPrivate,
    foreignBonds,
    bootstrappedHomeEquity,
    commercialBankingEquipmentLoan,
    cryptocurrency,
    accountsReceivableLoans,
    invoiceFactoring,
    ebsImmigration,
    corporateGrants,
    publicHedgeFunds,
    privateHedgeFunds,
    brokerDealerRepresentation,
    bridgeFinancing,
    regulationA,
    regulationCFTitleIII,
    sba7A,
    tokenization
 } from "../data/Keywords";
import markets from "../data/Markets";
import MarketType from "../types/MarketType";

const dictionary = new Map<string, MarketType>();

function Populate(marketKeywords: string[], marketId: number): void {
    for (let i = 0; i < marketKeywords.length; i++) {
        dictionary.set(marketKeywords[i], markets[marketId - 1]);
    }
}

// 1. Accelerator - Private (925)
Populate(acceleratorPrivate, 1)

// 2. Bonds - Foreign
Populate(foreignBonds, 2);

// 3. Bootstrapped - Home Equity
Populate(bootstrappedHomeEquity, 3)

// 4. Commercial Banking - Equipment Loan
Populate(commercialBankingEquipmentLoan, 4)

// 5. Cryptocurrency - Investment via Crypto Wallet
Populate(cryptocurrency, 5)

// 6. Factoring - Accounts Receivable Loans
Populate(accountsReceivableLoans, 6)

// 7. Factoring – Invoice Factoring
Populate(invoiceFactoring, 7)

// 8. Government Incentives - EB5 Immigration
Populate(ebsImmigration, 8)

// 9. Grants - Corporate Grants
Populate(corporateGrants, 9)

// 10. Hedge Funds – Private
Populate(privateHedgeFunds, 10)

// 11. Hedge Funds – Public
Populate(publicHedgeFunds, 11)

// 12. Investment Banking - Broker Dealer Representation
Populate(brokerDealerRepresentation, 12)

// 13. Private Debt - Bridge Financing
Populate(bridgeFinancing, 13)

// 14. Private Equity Securities - Regulation A
Populate(regulationA, 14)

// 15. Private Equity Securities - Regulation CF Title III
Populate(regulationCFTitleIII, 15)

// 16. Small Business Administration (SBA) – SBA 7A
Populate(sba7A, 16)

// 17. Tokenization
Populate(tokenization, 17)

export default dictionary;