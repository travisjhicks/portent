# Example: Health Responsibility

This example shows the difference between outcome-oriented responsibilities and output-oriented projects.

## Responsibility

```yaml
---
type: Responsibility
related_to:
  - "[[Fitness]]"
  - "[[Recovery]]"
---

# Maintain Personal Health

Maintain and gradually improve health outcomes through training, recovery, nutrition, and regular measurement.

## Indicators

- Resting heart rate
- VO2 max
- Weekly training sessions
- Sleep consistency
```

## Project

```yaml
---
type: Project
belongs_to: "[[Maintain Personal Health]]"
related_to:
  - "[[Padel]]"
deadline: 2026-06-30
---

# Start Playing Padel Twice A Week

By the end of the quarter, establish a twice-weekly padel habit that improves cardiovascular fitness and makes training more social.

## Success Criteria

- Choose two weekly playing slots.
- Book recurring court time.
- Complete at least eight sessions.
```

## Operation

```yaml
---
type: Operation
belongs_to: "[[Maintain Personal Health]]"
related_to:
  - "[[Training log]]"
---

# Weekly Health Review

Review training sessions, sleep, resting heart rate, and recovery signals.
```
