import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import { NumericFormat  } from 'react-number-format';

function toAttr(meta, other={}, readOnly) {
  if('min' in meta) {
    other.min = meta.min;
  }
  if('max' in meta) {
    other.max = meta.max;
  }
  const attr = {
    title: meta.tooltip || meta.synonym,
  };
  if(meta.mandatory) {
    attr.required = true;
  }
  if(readOnly) {
    other.readOnly = true;
  }
  return {other, attr};
}

function actions({obj, fld, onChange, value, setValue}) {
  const onKeyDown = (ev) => {
    const {key} = ev;
    if(key === 'Enter' || key === 'Tab') {
      // ev.preventDefault?.();
      // ev.stopPropagation?.();
      const v = parseFloat(value || 0);
      if(!isNaN(v) && obj[fld] != v) {
        obj[fld] = v;
        onChange?.(obj[fld]);
      }
      setValue(obj[fld]);
    }
  };

  const onBlur = () => {
    onKeyDown({key: 'Enter'});
  };

  const onFocus = () => {
    setValue(obj[fld]);
    //setTimeout(() => ref.current?.firstChild?.select(), 20);
  };

  const handleChange = ({target}) => {
    setValue(target.value);
  };

  return {onKeyDown, onBlur, onFocus, handleChange};
}

export function NumberFormatCustom(props) {
  const { onChange, min, max, ...other } = props;

  return (
    <NumericFormat
      {...other}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      isAllowed={({ floatValue }) => {
        return (min === undefined || floatValue >= min) && (max === undefined || floatValue <= max);
      }}
      decimalSeparator=","
      thousandSeparator={'\u00A0'}
      valueIsNumericString
    />
  );
}

function autoFocusAndSelect(input) {
  input?.focus();
  input?.select();
}

export function NumberField({obj, fld, meta, label, readOnly,  fullWidth=true, onChange, ...other}) {
  if(!meta) {
    meta = obj._metadata(fld);
  }
  if(!label && meta) {
    label = meta.synonym;
  }
  const {attr} = toAttr(meta, other, readOnly);
  const [value, setValue] = React.useState(obj[fld]);
  const {onKeyDown, onBlur, onFocus, handleChange} = actions({obj, fld, onChange, value, setValue});

  React.useEffect(function listen() {
    function update (curr, flds){
      if(curr === obj && fld in flds) {
        setValue(obj[fld]);
      }
    }
    const {_manager} = obj;
    if(_manager) {
      _manager.on({update});
      return () => _manager.off({update});
    }
  }, [obj, fld]);

  return <FormControl fullWidth={fullWidth} {...attr}>
    <InputLabel>{label}</InputLabel>
    <NumberFormatCustom
      value={value}
      onChange={handleChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      onFocus={onFocus}
      customInput={Input}
      {...other}
    />
  </FormControl>;
}

export function NumberCell({row, column, onRowChange, onClose}) {
  const obj = row.row;
  const fld = column.key;
  const [value, setValue] = React.useState(obj[fld]);

  const {TextEditor, attr, other} = React.useMemo(() => {

    function TextEditor(porps) {
      return <input
        ref={autoFocusAndSelect}
        className="rdg-text-editor tlmcuo07-0-0-beta-37"
        value={porps.value}
        onChange={({target}) => {
          setValue(target.value);
        }}
        // onBlur={() => {
        //   onClose(true);
        // }}
        onKeyDown={(ev) => {
          const {key} = ev;
          if(key === 'Enter' || key === 'Tab') {
            const value = typeof porps.value === 'string' ? porps.value.replace(/\u00A0/g,'') : 0;
            const v = parseFloat(value);
            if(!isNaN(v) && obj[fld] != v) {
              obj[fld] = v;
              onRowChange({...row}, true);
            }
            setValue(obj[fld]);
          }
        }}
      />;
    }
    return {TextEditor, ...toAttr(obj._metadata(fld))};
  }, [obj, fld]);

  return <NumberFormatCustom
    value={value}
    onChange={({target}) => {
      //console.log(target.value);
    }}
    customInput={TextEditor}
    {...other}
  />;
}

export function NumberFormatter({row, column}) {

  const [value, setValue] = React.useState(row.row[column.key]);

  React.useEffect(() => {
    function update (curr, flds){
      if(row.row.equals(curr)) {
        setValue(row.row[column.key]);
      }
    }
    row.row._manager.on({update});
    return () => {
      row.row._manager.off({update});
    };
  }, [row.row, column.key]);

  return value;
}
