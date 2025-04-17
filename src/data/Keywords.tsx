const keywords: string[] = [
    "Private Accelerator", // 0
    "Early-Stage Company", // 1
    "Seeking Equity Capital", // 2
    "Seeking Mentorship", // 3
    "Seeking Rapid Development", // 4
    "Equity Capital in 3 to 6 Months", // 5
    "Refine Business Models", // 6
    "Gain Market Traction", // 7
    "Attract Investment", // 8
    "Small Equity Stake", // 9
    "Giving Up Equity Too Early", // 10
    "Misalignment", // 11
    "Intense Competition", // 12
    "Foreign Bonds", // 13
    "International Markets", // 14
    "Borrow Funds in Other Countries", // 15
    "Bootstrap", // 16
    "Home Equity", // 17
    "Founder", // 18
    "Small Business Owner", // 19
    "Leverage Built-Up Value", // 20
    "Personal Real Estate", // 21
    "Maintain Full Ownership", // 22
    "Accessing Capital", // 23
    "Accessing Funds", // 24 
    "Ranging from $50,000 to $500,000", // 25
    "HELOCs", // 26,
    "Cash-Out Refinancing", // 27,
    "Capital Sourcing", // 28
    "Entrepreneur", // 29,
    "Foreclosure", // 30
    "Commercial Banking", // 31
    "Finance New Equipment", // 32
    "Finance Used Equipment", // 33
    "Equipment Loan", // 34
    "Acquire Machinery", // 35
    "Acquire Vehicles", // 36
    "Acquire Technology", // 37
    "Manufacturing", // 38
    "Transportation", // 39
    "1 to 7 Year Finance Terms", // 40
    "Maintain Cash Flow", // 41
    "Poor Credit", // 42
    "High Interest Rate Possibility", // 43
    "Loan Defaulting", // 44
    "Cryptocurrency", // 45
    "Crypto Wallet", // 46
    "Tokenized Assets", // 47
    "Raise Capital Ranging from $1 to $100 Million", // 48
    "Raise Capital in 12-Month Period", // 49
    "Blockchain Technology", // 50
    "Digital Assets", // 51
    "ICO", // 52
    "STO", // 53
    "Decentralized Finance Models", // 54
    "Bypass Intermediaries", // 55
    "Wallet-Based Investments", // 56
    "Market Volatility", // 57
    "Hacking", // 58
    "Phishing", // 59
    "Limited Regulatory Protection", // 60
    "Accounts Receivable Loans", // 61
    "AR", // 62
    "Fast Access to 70% to 80% of Outstanding Invoice Amounts", // 63
    "Unpaid Invoices as Collateral", // 64
    "Providing Products or Services", // 65
    "Receiving Customer Payments", // 66
    "Immediate Cash Flow", // 67
    "CAGR", // 68
    "B2B", // 69
    "Invoice Factoring", // 70
    "Immediate Access", // 71
    "Sell Unpaid Invoices", // 72
    "Long Payment Cycles", // 73
    "Accelerate Cash Flow", // 74
    "Reduce Risk", // 75
    "Delayed Receivables", // 76
    "Healthy Cashflow", // 77
    "70-90% Advance", // 78
    "Government Incentives", // 79
    "EB-5 Immigration", // 80
    "Foreign Investors", // 81
    "U.S. Residency", // 82
    "Target Employment Area", // 83
    "TEA", // 84
    "Job Creation", // 85
    "Economic Development", // 86
    "Attract International Capital", // 87
    "Potential Loss of Capital", // 88
    "No Guarantee of Returns", // 89
    "No Guarantee of Job Creation", // 90
    "Corporate Grants", // 91
    "Non-Dilutive Funding", // 92
    "Support Research", // 93
    "Support Innovation", // 94
    "Support Community Development", // 95
    "Support Socially Impactful Business Models", // 96
    "Support Initiatives", // 97
    "Corporate Social Responsibility", // 98
    "CSR", // 99
    "Strategic Goals", // 100
    "High Competition", // 101
    "Eligibility Limitations", // 102
    "Extensive Reporting Requirements", // 103
    "Private Hedge Funds", // 104
    "For Accredited Investors", // 105
    "For Accredited Institutions", // 106
    "Seeking High-Return Investments", // 107
    "From Sophisticated Investors", // 108
    "Implement Returns", // 109
    "Long/Short Equity Returns", // 110
    "Event-Driven Returns", // 111
    "Global Macro Returns", // 112
    "Significant Returns", // 113
    "Wealth Accumulation", // 114
    "Capital Preservation", // 115
    "Public Hedge Funds", // 116
    "From Accredited Investors", // 117
    "From Accredited Institutions", // 118
    "Seeking High-Return Opportunities", // 119
    "Long/Short Equity Strategies", // 120
    "Event-Driven Strategies", // 121
    "Global Macro Strategies", // 122
    "Investment Approach Flexibility", // 123
    "Substantial Capital", // 124
    "Capital Raising", // 125
    "Investment Diversification", // 126
    "Pool of Investors", // 127
    "Investment Banking", // 128
    "Broker Deal Representation", // 129
    "Experienced Intermediaries", // 130
    "Facilitate Buying and Selling", // 131
    "Private Company", // 132
    "Securities Offerings", // 133
    "Securities Transactions", // 134
    "Navigate Regulatory Requirements", // 135
    "Optimize Fundraising Strategies", // 136
    "Private Debt", // 137
    "Fees that Reduce Raised Capital", // 138
    "Reliance on Third Parties", // 139
    "Bridge Financing", // 140
    "Short Term Solutions", // 141
    "Await Larger Funding Round", // 142
    "Await Liquidity Event", // 143
    "Short-Term Debt", // 144 
    "Convertible Notes", // 145
    "Higher Interest Rates", // 146
    "Strict Repayment Terms", // 147
    "Equity Dilution", // 148
    "Clear Path to Future Funding", // 149
    "Clear Path to Revenue", // 150
    "Regulation A", // 151
    "Reg A+", // 152
    "Raise $5 Million to $75 Million in Capital", // 153
    "Sell Privately-Held Companies", // 154
    "Regulation CF Title III", // 155
    "Fund Privately-Held Companies", // 156
    "Crowdfunding", // 157
    "SEC-Registered Crowdfunding Platforms", // 158
    "JOBS Act", // 159
    "Early-Stage Startups", // 160
    "Complex Disclosure Agreements", // 161
    "Annual Reporting Obligations", // 162
    "Investment Limits", // 163
    "Small Business Administration", // 164
    "Smaller Business", // 165
    "SBA 7(a)", // 166
    "Financing Amounts up to $5 Million", // 167
    "Provide Working Capital", // 168
    "Provide Equipment Financing", // 169
    "Funds for Expansion", // 170
    "Flexible Terms", // 171
    "Competitive Interest Rates", // 172
    "Government-Backed Guarantees", // 173 
    "Tokenization", // 174
    "Improve Asset Liquidity", // 175
    "Converting Real-World Assets", // 176
    "Convert Equity", // 177
    "Convert Debt", // 178
    "Convert Real Estate", // 179
    "Convert Revenue Rights", // 180
    "Digital Tokens", // 181
    "Investor Accessibility", // 182 
    "Fractional Ownership", // 183
    "Secure Token Offerings", // 184
    "STOs", // 185
    "Democratized Access", // 186
    "Regulatory Uncertainty", // 187
    "Platform Security Vulnerabilities", // 188
    "Lower Secondary Market Activity" // 189
];

export default keywords;