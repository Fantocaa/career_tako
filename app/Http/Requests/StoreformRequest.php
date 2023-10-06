<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreformRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => ['required', 'max:14', 'min:6'],
            'last_name' => ['required', 'min:6'],
        ];
    }
    public function messages(): array
    {
        return [
            'first_name.required' => 'picek matamu iki kosong',
            'first_name.max' => 'tolol kakeyan',
            'first_name.min' => 'tolol titiken',
        ];
    }
}
