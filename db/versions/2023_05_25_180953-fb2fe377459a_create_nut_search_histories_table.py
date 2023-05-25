"""create nut.search-histories table

Revision ID: fb2fe377459a
Revises: 718e07955d43
Create Date: 2023-05-25 18:09:53.918065

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fb2fe377459a'
down_revision = '718e07955d43'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'search_histories',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('user_id', sa.Integer, nullable=False),
        sa.Column('ip', sa.String(45), nullable=False),
        sa.Column('keyword', sa.String(63), nullable=False),
        sa.Column('from', sa.String(length=255), nullable=False),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_search_histories_ip', 'search_histories', ['ip'])
    op.create_index('idx_search_histories_keyword',
                    'search_histories', ['keyword'])
    op.create_index('idx_search_histories_from', 'search_histories', ['from'])


def downgrade() -> None:
    op.drop_table('search_histories')
