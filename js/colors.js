export const randomColor = () => {
    const colors = [
        "CAF4FF", "A0DEFF", "5AB2FF", "68D2E8", "7EA1FF", "FF8080", "FEA1A1",
        "FF9F9F", "FF87B2", "FF5D5D", "A5DD9B", "C5EBAA", "DCFFB7", "99BC85",
        "D9EDBF", "AAD9BB", "A1EEBD", "FFBB70", "FFEC9E", "FFCF96", "FFBE98", 
        "FFBB64", "B5C0D0", "E5E1DA", "D2E9E9", "E5D4FF", "D0A2F7", "BEADFA",
        "DFCCFB", "AEE2FF", "ACBCFF", "C780FA", "03AED2", "FDFFC2", "94FFD8",
        "cdb4db", "ffc8dd", "ffafcc", "bde0fe", "a2d2ff", "48cae4", "90e0ef",
        "caf0f8", "d6ccc2", "d5bdaf", "ccc5b9", "84a59d", "cbf3f0", "d9ed92"
    ]
    
    const color = Math.floor(Math.random() * colors.length)
    return colors[color]
}