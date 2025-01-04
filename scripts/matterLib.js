function commonItem(Name, color, explosivenessI, flammabilityI, radioactivityI, chargeI, hardnessI, unlock) {
    const i = extend(Item, Name, color, {
        explosiveness: explosivenessI,
        flammability: flammabilityI,
        radioactivity: radioactivityI,
        charge: chargeI,
        hardness: hardnessI,
        alwaysUnlocked: unlock,
    });
    if (unlock !== true) { unlock = false } else { unlock = true };
    return i = i;
    exports.i = i;
};
exports.commonItem = commonItem;