---
title: Markdown Admonitions
description: This note showcases using the markdown admonition feature in Astro Cactus
publishDate: "2025-02-03 20:56"
---

## Admonition Types

The following admonitions are currently supported:

- `note`
- `tip`
- `important`
- `warning`
- `caution`

### Note

```md
:::note
Highlights information that users should take into account, even when skimming.
:::
```

:::note
Highlights information that users should take into account, even when skimming.
:::

### Tip

```md
:::tip
Optional information to help a user be more successful.
:::
```

:::tip
Optional information to help a user be more successful.
:::

### Important

```md
:::important
Crucial information necessary for users to succeed.
:::
```

:::important
Crucial information necessary for users to succeed.
:::

### Caution

```md
:::caution
Negative potential consequences of an action.
:::
```

:::caution
Negative potential consequences of an action.
:::

### Warning

```md
:::warning
Critical content demanding immediate user attention due to potential risks.
:::
```

:::warning
Critical content demanding immediate user attention due to potential risks.
:::

## Customising the admonition title

You can customise the admonition title using the following markup:

```md
:::note[My custom title]
This is a note with a custom title.
:::
```

Outputs:

:::note[My custom title]
This is a note with a custom title.
:::
