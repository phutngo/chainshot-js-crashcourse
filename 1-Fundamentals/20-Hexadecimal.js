/**
 * Hexadecimal
Hexadecimal is traditionally used to represent raw data. It is most likely because of how easy it is to convert to and from binary!

16 Symbols 
Hexadecimal gets its name from the fact that it uses 16 symbols: 0 through 9 and a through f.

The decimal values for a through f are 10 through 15. Hexadecimal dips into alphabetical characters in order to have 16 symbols.

 The characters in hexadecimal are case-insensitive, meaning they can be either upper-case (A) or lower-case (a). In we'll learn about how mixed casing hexadecimal can be used as a checksum!

0x Prefix 
Typically, a string of hexadecimal characters is denoted with the prefix 0x. For example a random string of hexadecimal characters might look like this:

0x4fd979de3edf0f56aa9716b898ec8
 The 0x in front simply denotes the rest of this string is hexadecimal. The actual value is everything that comes after this prefix.

Manually Converting to Binary 
It is actually quite easy to convert hexadecimal to binary!

Since each character in hexadecimal can represent 16 values, it essentially maps to a nibble or four bits:

Hex	Binary
0	0000
1	0001
2	0010
…	…
e	1110
f	1111
 Once you know the values and what they map to, it's actually quite easy to convert between hexadecimal and binary!

For example the binary string, 11110100110110010111, can be written out:

1111 0100 1101 1001 0111
F    4    D    9    7
 We separated the bits into nibbles so that we can easily map them to hexadecimal values! Once you have a mapping table of the binary values, it is quite simple to go back and forth. If you have it memorized, you can do this sort of thing trivially. 

We can do the same thing in reverse for hexadecimal string, 0x1c3af:

1    C    3    A    F
0001 1100 0011 1100 1111
It is much easier to type 0x1c3af than 00011100001111001111, so you could see why hexadecimal may be preferable to the binary format!

Wrap Up 
Hexadecimal is traditionally used to represent raw data and we'll see quite a lot of it as we dive into crypto systems!

It is quite easily converted between binary by hand, which makes it a great tool for displaying large data values.
 */