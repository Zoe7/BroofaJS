/**
 * Blocks and char ranges from
 * https://www.fileformat.info/info/unicode/block/index.htm
 */

function rangeCount(str, min, max) {
  const re = new RegExp(`[\\u{${min.toString(16)}}-\\u{${max.toString(16)}}]`, 'gu');
  const count = str.length - str.replace(re, '').length;
  // Code points > 0xffff require 2 chars per Unicode code point, so divide by 2
  return min > 0xffff ? count / 2 : count;
}

module.exports = class StringLang {
  constructor(str) {
    this.str = str;
  }

  inspect() {
    const stats = {};
    Object.getOwnPropertyNames(StringLang.prototype).forEach(k => {
      const count = (k != 'inspect') && this[k];
      if (count > 0) stats[k] = count;
    });
    return stats;
  }

  get adlam() {return rangeCount(this.str, 0x1e900, 0x1e95f);}
  get aegeanNumbers() {return rangeCount(this.str, 0x10100, 0x1013f);}
  get ahom() {return rangeCount(this.str, 0x11700, 0x1173f);}
  get alchemicalSymbols() {return rangeCount(this.str, 0x1f700, 0x1f77f);}
  get alphabeticPresentationForms() {return rangeCount(this.str, 0xfb00, 0xfb4f);}
  get anatolianHieroglyphs() {return rangeCount(this.str, 0x14400, 0x1467f);}
  get ancientGreekMusicalNotation() {return rangeCount(this.str, 0x1d200, 0x1d24f);}
  get ancientGreekNumbers() {return rangeCount(this.str, 0x10140, 0x1018f);}
  get ancientSymbols() {return rangeCount(this.str, 0x10190, 0x101cf);}
  get arabic() {return rangeCount(this.str, 0x600, 0x6ff);}
  get arabicExtended() {return rangeCount(this.str, 0x8a0, 0x8ff);}
  get arabicMathematicalAlphabeticSymbols() {return rangeCount(this.str, 0x1ee00, 0x1eeff);}
  get arabicPresentationFormsA() {return rangeCount(this.str, 0xfb50, 0xfdff);}
  get arabicPresentationFormsB() {return rangeCount(this.str, 0xfe70, 0xfeff);}
  get arabicSupplement() {return rangeCount(this.str, 0x750, 0x77f);}
  get armenian() {return rangeCount(this.str, 0x530, 0x58f);}
  get arrows() {return rangeCount(this.str, 0x2190, 0x21ff);}
  get avestan() {return rangeCount(this.str, 0x10b00, 0x10b3f);}
  get balinese() {return rangeCount(this.str, 0x1b00, 0x1b7f);}
  get bamum() {return rangeCount(this.str, 0xa6a0, 0xa6ff);}
  get bamumSupplement() {return rangeCount(this.str, 0x16800, 0x16a3f);}
  get basicLatin() {return rangeCount(this.str, 0x0, 0x7f);}
  get bassaVah() {return rangeCount(this.str, 0x16ad0, 0x16aff);}
  get batak() {return rangeCount(this.str, 0x1bc0, 0x1bff);}
  get bengali() {return rangeCount(this.str, 0x980, 0x9ff);}
  get bhaiksuki() {return rangeCount(this.str, 0x11c00, 0x11c6f);}
  get blockElements() {return rangeCount(this.str, 0x2580, 0x259f);}
  get bopomofo() {return rangeCount(this.str, 0x3100, 0x312f);}
  get bopomofoExtended() {return rangeCount(this.str, 0x31a0, 0x31bf);}
  get boxDrawing() {return rangeCount(this.str, 0x2500, 0x257f);}
  get brahmi() {return rangeCount(this.str, 0x11000, 0x1107f);}
  get braillePatterns() {return rangeCount(this.str, 0x2800, 0x28ff);}
  get buginese() {return rangeCount(this.str, 0x1a00, 0x1a1f);}
  get buhid() {return rangeCount(this.str, 0x1740, 0x175f);}
  get byzantineMusicalSymbols() {return rangeCount(this.str, 0x1d000, 0x1d0ff);}
  get carian() {return rangeCount(this.str, 0x102a0, 0x102df);}
  get caucasianAlbanian() {return rangeCount(this.str, 0x10530, 0x1056f);}
  get chakma() {return rangeCount(this.str, 0x11100, 0x1114f);}
  get cham() {return rangeCount(this.str, 0xaa00, 0xaa5f);}
  get cherokee() {return rangeCount(this.str, 0x13a0, 0x13ff);}
  get cherokeeSupplement() {return rangeCount(this.str, 0xab70, 0xabbf);}
  get chessSymbols() {return rangeCount(this.str, 0x1fa00, 0x1fa6f);}
  get cjkCompatibility() {return rangeCount(this.str, 0x3300, 0x33ff);}
  get cjkCompatibilityForms() {return rangeCount(this.str, 0xfe30, 0xfe4f);}
  get cjkCompatibilityIdeographs() {return rangeCount(this.str, 0xf900, 0xfaff);}
  get cjkCompatibilityIdeographsSupplement() {return rangeCount(this.str, 0x2f800, 0x2fa1f);}
  get cjkRadicalsSupplement() {return rangeCount(this.str, 0x2e80, 0x2eff);}
  get cjkStrokes() {return rangeCount(this.str, 0x31c0, 0x31ef);}
  get cjkSymbolsandPunctuation() {return rangeCount(this.str, 0x3000, 0x303f);}
  get cjkUnifiedIdeographs() {return rangeCount(this.str, 0x4e00, 0x9fff);}
  get cjkUnifiedIdeographsExtensionA() {return rangeCount(this.str, 0x3400, 0x4dbf);}
  get cjkUnifiedIdeographsExtensionB() {return rangeCount(this.str, 0x20000, 0x2a6df);}
  get cjkUnifiedIdeographsExtensionC() {return rangeCount(this.str, 0x2a700, 0x2b73f);}
  get cjkUnifiedIdeographsExtensionD() {return rangeCount(this.str, 0x2b740, 0x2b81f);}
  get cjkUnifiedIdeographsExtensionE() {return rangeCount(this.str, 0x2b820, 0x2ceaf);}
  get cjkUnifiedIdeographsExtensionF() {return rangeCount(this.str, 0x2ceb0, 0x2ebef);}
  get combiningDiacriticalMarks() {return rangeCount(this.str, 0x300, 0x36f);}
  get combiningDiacriticalMarksExtended() {return rangeCount(this.str, 0x1ab0, 0x1aff);}
  get combiningDiacriticalMarksSupplement() {return rangeCount(this.str, 0x1dc0, 0x1dff);}
  get combiningDiacriticalMarksforSymbols() {return rangeCount(this.str, 0x20d0, 0x20ff);}
  get combiningHalfMarks() {return rangeCount(this.str, 0xfe20, 0xfe2f);}
  get commonIndicNumberForms() {return rangeCount(this.str, 0xa830, 0xa83f);}
  get controlPictures() {return rangeCount(this.str, 0x2400, 0x243f);}
  get coptic() {return rangeCount(this.str, 0x2c80, 0x2cff);}
  get copticEpactNumbers() {return rangeCount(this.str, 0x102e0, 0x102ff);}
  get countingRodNumerals() {return rangeCount(this.str, 0x1d360, 0x1d37f);}
  get cuneiform() {return rangeCount(this.str, 0x12000, 0x123ff);}
  get cuneiformNumbersandPunctuation() {return rangeCount(this.str, 0x12400, 0x1247f);}
  get currencySymbols() {return rangeCount(this.str, 0x20a0, 0x20cf);}
  get cypriotSyllabary() {return rangeCount(this.str, 0x10800, 0x1083f);}
  get cyrillic() {return rangeCount(this.str, 0x400, 0x4ff);}
  get cyrillicExtendedA() {return rangeCount(this.str, 0x2de0, 0x2dff);}
  get cyrillicExtendedB() {return rangeCount(this.str, 0xa640, 0xa69f);}
  get cyrillicExtendedC() {return rangeCount(this.str, 0x1c80, 0x1c8f);}
  get cyrillicSupplement() {return rangeCount(this.str, 0x500, 0x52f);}
  get deseret() {return rangeCount(this.str, 0x10400, 0x1044f);}
  get devanagari() {return rangeCount(this.str, 0x900, 0x97f);}
  get devanagariExtended() {return rangeCount(this.str, 0xa8e0, 0xa8ff);}
  get dingbats() {return rangeCount(this.str, 0x2700, 0x27bf);}
  get dogra() {return rangeCount(this.str, 0x11800, 0x1184f);}
  get dominoTiles() {return rangeCount(this.str, 0x1f030, 0x1f09f);}
  get duployan() {return rangeCount(this.str, 0x1bc00, 0x1bc9f);}
  get earlyDynasticCuneiform() {return rangeCount(this.str, 0x12480, 0x1254f);}
  get egyptianHieroglyphs() {return rangeCount(this.str, 0x13000, 0x1342f);}
  get elbasan() {return rangeCount(this.str, 0x10500, 0x1052f);}
  get emoticons() {return rangeCount(this.str, 0x1f600, 0x1f64f);}
  get enclosedAlphanumericSupplement() {return rangeCount(this.str, 0x1f100, 0x1f1ff);}
  get enclosedAlphanumerics() {return rangeCount(this.str, 0x2460, 0x24ff);}
  get enclosedCJKLettersandMonths() {return rangeCount(this.str, 0x3200, 0x32ff);}
  get enclosedIdeographicSupplement() {return rangeCount(this.str, 0x1f200, 0x1f2ff);}
  get ethiopic() {return rangeCount(this.str, 0x1200, 0x137f);}
  get ethiopicExtended() {return rangeCount(this.str, 0x2d80, 0x2ddf);}
  get ethiopicExtendedA() {return rangeCount(this.str, 0xab00, 0xab2f);}
  get ethiopicSupplement() {return rangeCount(this.str, 0x1380, 0x139f);}
  get generalPunctuation() {return rangeCount(this.str, 0x2000, 0x206f);}
  get geometricShapes() {return rangeCount(this.str, 0x25a0, 0x25ff);}
  get geometricShapesExtended() {return rangeCount(this.str, 0x1f780, 0x1f7ff);}
  get georgian() {return rangeCount(this.str, 0x10a0, 0x10ff);}
  get georgianExtended() {return rangeCount(this.str, 0x1c90, 0x1cbf);}
  get georgianSupplement() {return rangeCount(this.str, 0x2d00, 0x2d2f);}
  get glagolitic() {return rangeCount(this.str, 0x2c00, 0x2c5f);}
  get glagoliticSupplement() {return rangeCount(this.str, 0x1e000, 0x1e02f);}
  get gothic() {return rangeCount(this.str, 0x10330, 0x1034f);}
  get grantha() {return rangeCount(this.str, 0x11300, 0x1137f);}
  get greekExtended() {return rangeCount(this.str, 0x1f00, 0x1fff);}
  get greekandCoptic() {return rangeCount(this.str, 0x370, 0x3ff);}
  get gujarati() {return rangeCount(this.str, 0xa80, 0xaff);}
  get gunjalaGondi() {return rangeCount(this.str, 0x11d60, 0x11daf);}
  get gurmukhi() {return rangeCount(this.str, 0xa00, 0xa7f);}
  get halfwidthandFullwidthForms() {return rangeCount(this.str, 0xff00, 0xffef);}
  get hangulCompatibilityJamo() {return rangeCount(this.str, 0x3130, 0x318f);}
  get hangulJamo() {return rangeCount(this.str, 0x1100, 0x11ff);}
  get hangulJamoExtendedA() {return rangeCount(this.str, 0xa960, 0xa97f);}
  get hangulJamoExtendedB() {return rangeCount(this.str, 0xd7b0, 0xd7ff);}
  get hangulSyllables() {return rangeCount(this.str, 0xac00, 0xd7af);}
  get hanifiRohingya() {return rangeCount(this.str, 0x10d00, 0x10d3f);}
  get hanunoo() {return rangeCount(this.str, 0x1720, 0x173f);}
  get hatran() {return rangeCount(this.str, 0x108e0, 0x108ff);}
  get hebrew() {return rangeCount(this.str, 0x590, 0x5ff);}
  get highPrivateUseSurrogates() {return rangeCount(this.str, 0xdb80, 0xdbff);}
  get highSurrogates() {return rangeCount(this.str, 0xd800, 0xdb7f);}
  get hiragana() {return rangeCount(this.str, 0x3040, 0x309f);}
  get ideographicDescriptionCharacters() {return rangeCount(this.str, 0x2ff0, 0x2fff);}
  get ideographicSymbolsandPunctuation() {return rangeCount(this.str, 0x16fe0, 0x16fff);}
  get imperialAramaic() {return rangeCount(this.str, 0x10840, 0x1085f);}
  get indicSiyaqNumbers() {return rangeCount(this.str, 0x1ec70, 0x1ecbf);}
  get inscriptionalPahlavi() {return rangeCount(this.str, 0x10b60, 0x10b7f);}
  get inscriptionalParthian() {return rangeCount(this.str, 0x10b40, 0x10b5f);}
  get ipaExtensions() {return rangeCount(this.str, 0x250, 0x2af);}
  get javanese() {return rangeCount(this.str, 0xa980, 0xa9df);}
  get kaithi() {return rangeCount(this.str, 0x11080, 0x110cf);}
  get kanaExtended() {return rangeCount(this.str, 0x1b100, 0x1b12f);}
  get kanaSupplement() {return rangeCount(this.str, 0x1b000, 0x1b0ff);}
  get kanbun() {return rangeCount(this.str, 0x3190, 0x319f);}
  get kangxiRadicals() {return rangeCount(this.str, 0x2f00, 0x2fdf);}
  get kannada() {return rangeCount(this.str, 0xc80, 0xcff);}
  get katakana() {return rangeCount(this.str, 0x30a0, 0x30ff);}
  get katakanaPhoneticExtensions() {return rangeCount(this.str, 0x31f0, 0x31ff);}
  get kayahLi() {return rangeCount(this.str, 0xa900, 0xa92f);}
  get kharoshthi() {return rangeCount(this.str, 0x10a00, 0x10a5f);}
  get khmer() {return rangeCount(this.str, 0x1780, 0x17ff);}
  get khmerSymbols() {return rangeCount(this.str, 0x19e0, 0x19ff);}
  get khojki() {return rangeCount(this.str, 0x11200, 0x1124f);}
  get khudawadi() {return rangeCount(this.str, 0x112b0, 0x112ff);}
  get lao() {return rangeCount(this.str, 0xe80, 0xeff);}
  get latinExtendedA() {return rangeCount(this.str, 0x100, 0x17f);}
  get latinExtendedAdditional() {return rangeCount(this.str, 0x1e00, 0x1eff);}
  get latinExtendedB() {return rangeCount(this.str, 0x180, 0x24f);}
  get latinExtendedC() {return rangeCount(this.str, 0x2c60, 0x2c7f);}
  get latinExtendedD() {return rangeCount(this.str, 0xa720, 0xa7ff);}
  get latinExtendedE() {return rangeCount(this.str, 0xab30, 0xab6f);}
  get latinSupplement() {return rangeCount(this.str, 0x80, 0xff);}
  get lepcha() {return rangeCount(this.str, 0x1c00, 0x1c4f);}
  get letterlikeSymbols() {return rangeCount(this.str, 0x2100, 0x214f);}
  get limbu() {return rangeCount(this.str, 0x1900, 0x194f);}
  get linearA() {return rangeCount(this.str, 0x10600, 0x1077f);}
  get linearBIdeograms() {return rangeCount(this.str, 0x10080, 0x100ff);}
  get linearBSyllabary() {return rangeCount(this.str, 0x10000, 0x1007f);}
  get lisu() {return rangeCount(this.str, 0xa4d0, 0xa4ff);}
  get lowSurrogates() {return rangeCount(this.str, 0xdc00, 0xdfff);}
  get lycian() {return rangeCount(this.str, 0x10280, 0x1029f);}
  get lydian() {return rangeCount(this.str, 0x10920, 0x1093f);}
  get mahajani() {return rangeCount(this.str, 0x11150, 0x1117f);}
  get mahjongTiles() {return rangeCount(this.str, 0x1f000, 0x1f02f);}
  get makasar() {return rangeCount(this.str, 0x11ee0, 0x11eff);}
  get malayalam() {return rangeCount(this.str, 0xd00, 0xd7f);}
  get mandaic() {return rangeCount(this.str, 0x840, 0x85f);}
  get manichaean() {return rangeCount(this.str, 0x10ac0, 0x10aff);}
  get marchen() {return rangeCount(this.str, 0x11c70, 0x11cbf);}
  get masaramGondi() {return rangeCount(this.str, 0x11d00, 0x11d5f);}
  get mathematicalAlphanumericSymbols() {return rangeCount(this.str, 0x1d400, 0x1d7ff);}
  get mathematicalOperators() {return rangeCount(this.str, 0x2200, 0x22ff);}
  get mayanNumerals() {return rangeCount(this.str, 0x1d2e0, 0x1d2ff);}
  get medefaidrin() {return rangeCount(this.str, 0x16e40, 0x16e9f);}
  get meeteiMayek() {return rangeCount(this.str, 0xabc0, 0xabff);}
  get meeteiMayekExtensions() {return rangeCount(this.str, 0xaae0, 0xaaff);}
  get mendeKikakui() {return rangeCount(this.str, 0x1e800, 0x1e8df);}
  get meroiticCursive() {return rangeCount(this.str, 0x109a0, 0x109ff);}
  get meroiticHieroglyphs() {return rangeCount(this.str, 0x10980, 0x1099f);}
  get miao() {return rangeCount(this.str, 0x16f00, 0x16f9f);}
  get miscellaneousMathematicalSymbolsA() {return rangeCount(this.str, 0x27c0, 0x27ef);}
  get miscellaneousMathematicalSymbolsB() {return rangeCount(this.str, 0x2980, 0x29ff);}
  get miscellaneousSymbols() {return rangeCount(this.str, 0x2600, 0x26ff);}
  get miscellaneousSymbolsandArrows() {return rangeCount(this.str, 0x2b00, 0x2bff);}
  get miscellaneousSymbolsandPictographs() {return rangeCount(this.str, 0x1f300, 0x1f5ff);}
  get miscellaneousTechnical() {return rangeCount(this.str, 0x2300, 0x23ff);}
  get modi() {return rangeCount(this.str, 0x11600, 0x1165f);}
  get modifierToneLetters() {return rangeCount(this.str, 0xa700, 0xa71f);}
  get mongolian() {return rangeCount(this.str, 0x1800, 0x18af);}
  get mongolianSupplement() {return rangeCount(this.str, 0x11660, 0x1167f);}
  get mro() {return rangeCount(this.str, 0x16a40, 0x16a6f);}
  get multani() {return rangeCount(this.str, 0x11280, 0x112af);}
  get musicalSymbols() {return rangeCount(this.str, 0x1d100, 0x1d1ff);}
  get myanmar() {return rangeCount(this.str, 0x1000, 0x109f);}
  get myanmarExtendedA() {return rangeCount(this.str, 0xa9e0, 0xa9ff);}
  get myanmarExtendedB() {return rangeCount(this.str, 0xaa60, 0xaa7f);}
  get nKo() {return rangeCount(this.str, 0x7c0, 0x7ff);}
  get nabataean() {return rangeCount(this.str, 0x10880, 0x108af);}
  get newTaiLue() {return rangeCount(this.str, 0x1980, 0x19df);}
  get newa() {return rangeCount(this.str, 0x11400, 0x1147f);}
  get numberForms() {return rangeCount(this.str, 0x2150, 0x218f);}
  get nushu() {return rangeCount(this.str, 0x1b170, 0x1b2ff);}
  get ogham() {return rangeCount(this.str, 0x1680, 0x169f);}
  get olChiki() {return rangeCount(this.str, 0x1c50, 0x1c7f);}
  get oldHungarian() {return rangeCount(this.str, 0x10c80, 0x10cff);}
  get oldItalic() {return rangeCount(this.str, 0x10300, 0x1032f);}
  get oldNorthArabian() {return rangeCount(this.str, 0x10a80, 0x10a9f);}
  get oldPermic() {return rangeCount(this.str, 0x10350, 0x1037f);}
  get oldPersian() {return rangeCount(this.str, 0x103a0, 0x103df);}
  get oldSogdian() {return rangeCount(this.str, 0x10f00, 0x10f2f);}
  get oldSouthArabian() {return rangeCount(this.str, 0x10a60, 0x10a7f);}
  get oldTurkic() {return rangeCount(this.str, 0x10c00, 0x10c4f);}
  get opticalCharacterRecognition() {return rangeCount(this.str, 0x2440, 0x245f);}
  get oriya() {return rangeCount(this.str, 0xb00, 0xb7f);}
  get ornamentalDingbats() {return rangeCount(this.str, 0x1f650, 0x1f67f);}
  get osage() {return rangeCount(this.str, 0x104b0, 0x104ff);}
  get osmanya() {return rangeCount(this.str, 0x10480, 0x104af);}
  get pahawhHmong() {return rangeCount(this.str, 0x16b00, 0x16b8f);}
  get palmyrene() {return rangeCount(this.str, 0x10860, 0x1087f);}
  get pauCinHau() {return rangeCount(this.str, 0x11ac0, 0x11aff);}
  get phagsa() {return rangeCount(this.str, 0xa840, 0xa87f);}
  get phaistosDisc() {return rangeCount(this.str, 0x101d0, 0x101ff);}
  get phoenician() {return rangeCount(this.str, 0x10900, 0x1091f);}
  get phoneticExtensions() {return rangeCount(this.str, 0x1d00, 0x1d7f);}
  get phoneticExtensionsSupplement() {return rangeCount(this.str, 0x1d80, 0x1dbf);}
  get playingCards() {return rangeCount(this.str, 0x1f0a0, 0x1f0ff);}
  get privateUseArea() {return rangeCount(this.str, 0xe000, 0xf8ff);}
  get psalterPahlavi() {return rangeCount(this.str, 0x10b80, 0x10baf);}
  get rejang() {return rangeCount(this.str, 0xa930, 0xa95f);}
  get rumiNumeralSymbols() {return rangeCount(this.str, 0x10e60, 0x10e7f);}
  get runic() {return rangeCount(this.str, 0x16a0, 0x16ff);}
  get samaritan() {return rangeCount(this.str, 0x800, 0x83f);}
  get saurashtra() {return rangeCount(this.str, 0xa880, 0xa8df);}
  get sharada() {return rangeCount(this.str, 0x11180, 0x111df);}
  get shavian() {return rangeCount(this.str, 0x10450, 0x1047f);}
  get shorthandFormatControls() {return rangeCount(this.str, 0x1bca0, 0x1bcaf);}
  get siddham() {return rangeCount(this.str, 0x11580, 0x115ff);}
  get sinhala() {return rangeCount(this.str, 0xd80, 0xdff);}
  get sinhalaArchaicNumbers() {return rangeCount(this.str, 0x111e0, 0x111ff);}
  get smallFormVariants() {return rangeCount(this.str, 0xfe50, 0xfe6f);}
  get sogdian() {return rangeCount(this.str, 0x10f30, 0x10f6f);}
  get soraSompeng() {return rangeCount(this.str, 0x110d0, 0x110ff);}
  get soyombo() {return rangeCount(this.str, 0x11a50, 0x11aaf);}
  get spacingModifierLetters() {return rangeCount(this.str, 0x2b0, 0x2ff);}
  get specials() {return rangeCount(this.str, 0xfff0, 0xffff);}
  get sundanese() {return rangeCount(this.str, 0x1b80, 0x1bbf);}
  get sundaneseSupplement() {return rangeCount(this.str, 0x1cc0, 0x1ccf);}
  get superscriptsandSubscripts() {return rangeCount(this.str, 0x2070, 0x209f);}
  get supplementalArrowsA() {return rangeCount(this.str, 0x27f0, 0x27ff);}
  get supplementalArrowsB() {return rangeCount(this.str, 0x2900, 0x297f);}
  get supplementalArrowsC() {return rangeCount(this.str, 0x1f800, 0x1f8ff);}
  get supplementalMathematicalOperators() {return rangeCount(this.str, 0x2a00, 0x2aff);}
  get supplementalPunctuation() {return rangeCount(this.str, 0x2e00, 0x2e7f);}
  get supplementalSymbolsandPictographs() {return rangeCount(this.str, 0x1f900, 0x1f9ff);}
  get supplementaryPrivateUseAreaA() {return rangeCount(this.str, 0xf0000, 0xfffff);}
  get supplementaryPrivateUseAreaB() {return rangeCount(this.str, 0x100000, 0x10ffff);}
  get suttonSignWriting() {return rangeCount(this.str, 0x1d800, 0x1daaf);}
  get sylotiNagri() {return rangeCount(this.str, 0xa800, 0xa82f);}
  get syriac() {return rangeCount(this.str, 0x700, 0x74f);}
  get syriacSupplement() {return rangeCount(this.str, 0x860, 0x86f);}
  get tagalog() {return rangeCount(this.str, 0x1700, 0x171f);}
  get tagbanwa() {return rangeCount(this.str, 0x1760, 0x177f);}
  get tags() {return rangeCount(this.str, 0xe0000, 0xe007f);}
  get taiLe() {return rangeCount(this.str, 0x1950, 0x197f);}
  get taiTham() {return rangeCount(this.str, 0x1a20, 0x1aaf);}
  get taiViet() {return rangeCount(this.str, 0xaa80, 0xaadf);}
  get taiXuanJingSymbols() {return rangeCount(this.str, 0x1d300, 0x1d35f);}
  get takri() {return rangeCount(this.str, 0x11680, 0x116cf);}
  get tamil() {return rangeCount(this.str, 0xb80, 0xbff);}
  get tangut() {return rangeCount(this.str, 0x17000, 0x187ff);}
  get tangutComponents() {return rangeCount(this.str, 0x18800, 0x18aff);}
  get telugu() {return rangeCount(this.str, 0xc00, 0xc7f);}
  get thaana() {return rangeCount(this.str, 0x780, 0x7bf);}
  get thai() {return rangeCount(this.str, 0xe00, 0xe7f);}
  get tibetan() {return rangeCount(this.str, 0xf00, 0xfff);}
  get tifinagh() {return rangeCount(this.str, 0x2d30, 0x2d7f);}
  get tirhuta() {return rangeCount(this.str, 0x11480, 0x114df);}
  get transportandMapSymbols() {return rangeCount(this.str, 0x1f680, 0x1f6ff);}
  get ugaritic() {return rangeCount(this.str, 0x10380, 0x1039f);}
  get unifiedCanadianAboriginalSyllabics() {return rangeCount(this.str, 0x1400, 0x167f);}
  get unifiedCanadianAboriginalSyllabicsExtended() {return rangeCount(this.str, 0x18b0, 0x18ff);}
  get vai() {return rangeCount(this.str, 0xa500, 0xa63f);}
  get variationSelectors() {return rangeCount(this.str, 0xfe00, 0xfe0f);}
  get variationSelectorsSupplement() {return rangeCount(this.str, 0xe0100, 0xe01ef);}
  get vedicExtensions() {return rangeCount(this.str, 0x1cd0, 0x1cff);}
  get verticalForms() {return rangeCount(this.str, 0xfe10, 0xfe1f);}
  get warangCiti() {return rangeCount(this.str, 0x118a0, 0x118ff);}
  get yiRadicals() {return rangeCount(this.str, 0xa490, 0xa4cf);}
  get yiSyllables() {return rangeCount(this.str, 0xa000, 0xa48f);}
  get yijingHexagramSymbols() {return rangeCount(this.str, 0x4dc0, 0x4dff);}
  get zanabazarSquare() {return rangeCount(this.str, 0x11a00, 0x11a4f);}
};
