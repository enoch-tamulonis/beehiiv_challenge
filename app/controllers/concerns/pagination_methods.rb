# frozen_string_literal: true

module PaginationMethods
  attr_reader :total_records
  def pagination(total_records)
    @total_records = total_records
    {
      page: page,
      per_page: limit,
      total: total_records,
      total_pages: total_records.nil? ? 0 : (total_records / limit.to_f).ceil,
      from: from,
      to: to
    }
  end

  def page
    return 1 if params[:page].nil?

    params[:page].to_i&.positive? ? params[:page].to_i : 1
  end

  def limit
    return 100 if params[:per_page].nil?

    params[:per_page].to_i > 100 ? 100 : params[:per_page].to_i
  end

  def offset
    page === 1 ? 0 : ((page - 1) * limit)
  end

  def from
    offset + 1
  end

  def to
    estimated_to = limit * page
    estimated_to > total_records ? total_records : estimated_to
  end
end
