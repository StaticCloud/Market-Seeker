import keywords from "../data/Keywords";
import markets from "../data/Markets";
import MarketType from "../types/MarketType";

const dictionary = new Map<string, MarketType>();

function Populate(start: number, end: number, market: number): void {
    for (let i: number = start; i < end + 1; i++) {
        dictionary.set(keywords[i], markets[market - 1]);
    }
}

// 1. Accelerator - Private (925)
Populate(0, 12, 1)

// 2. Bonds - Foreign
Populate(13, 15, 2);

// 3. Bootstrapped - Home Equity
Populate(14, 30, 3)

// 4. Commercial Banking - Equipment Loan
Populate(31, 44, 4)

// 5. Cryptocurrency - Investment via Crypto Wallet
Populate(45, 60, 5)

// 6. Factoring - Accounts Receivable Loans
Populate(61, 69, 6)

// 7. Factoring – Invoice Factoring
Populate(70, 78, 7)

// 8. Government Incentives - EB5 Immigration
Populate(79, 90, 8)

// 9. Grants - Corporate Grants
Populate(91, 103, 9)

// 10. Hedge Funds – Private
Populate(104, 115, 10)

// 11. Hedge Funds – Public
Populate(116, 128, 11)

// 12. Investment Banking - Broker Dealer Representation
Populate(129, 139, 12)

// 13. Private Debt - Bridge Financing
Populate(140, 150, 13)

// 14. Private Equity Securities - Regulation A
Populate(151, 154, 14)

// 15. Private Equity Securities - Regulation CF Title III
Populate(155, 163, 15)

// 16. Small Business Administration (SBA) – SBA 7A
Populate(164, 173, 16)

// 17. Tokenization
Populate(174, 189, 17)

export default dictionary;